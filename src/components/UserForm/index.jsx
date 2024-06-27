import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from './CustomInput';
import { Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const UserForm = () => {
  const { handleSubmit, control, reset, setValue } = useForm();
  const location = useLocation();
  const user = location.state?.user;

  useEffect(() => {
    if (user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("birthDate", user.birthDate);
      setValue("email", user.email);
      setValue("phone", user.phone);
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3100/v1/users/create', data);
      console.log('Dados enviados com sucesso:', response.data);
      reset();
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <Grid container direction="column" border="1px solid #e3e1ecb7" borderRadius={1} padding={5}>
      <Typography fontWeight={700} pb={3} color="#492cb3">
        Informações pessoais
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomInput
              name="firstName"
              control={control}
              label="Nome"
              rules={{ required: 'Campo obrigatório' }}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              name="lastName"
              control={control}
              label="Sobrenome"
              rules={{ required: 'Campo obrigatório' }}
            />
          </Grid>
          <Grid item xs={2}>
            <CustomInput
              name="birthDate"
              control={control}
              label="Data de nascimento"
              placeHolder="none"
              type="date"
              rules={{ required: 'Campo obrigatório' }}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              name="email"
              control={control}
              label="Email"
              type="email"
              rules={{
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Digite um e-mail válido',
                },
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <CustomInput
              name="phone"
              control={control}
              label="Celular"
              rules={{ required: 'Campo obrigatório' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between">
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
              <Button variant="contained" component={Link} to="/users">Voltar</Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default UserForm;
