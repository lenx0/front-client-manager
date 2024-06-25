// components/UserForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from './CustomInput';
import { Button, Grid } from '@mui/material';
import axios from 'axios';

const UserForm = () => {
  const { handleSubmit, control, reset } = useForm();

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomInput
            name="firstName"
            control={control}
            label="First Name"
            rules={{ required: 'First name is required' }}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            name="lastName"
            control={control}
            label="Last Name"
            rules={{ required: 'Last name is required' }}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            name="birthDate"
            control={control}
            label="Birth Date"
            placeHolder="none"
            type="date"
            rules={{ required: 'Birth date is required' }}
            defaultValue="" // Para inputs de tipo date
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            name="email"
            control={control}
            label="Email"
            type="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Enter a valid email address',
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            name="phone"
            control={control}
            label="Phone"
            rules={{ required: 'Phone number is required' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserForm;
