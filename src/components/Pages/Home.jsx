import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import axios from 'axios';
import Charts from '../Charts';

const Home = () => {
  const [birthdaysByMonth, setBirthdaysByMonth] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3100/v1/users/list');
        const users = response.data;

        const monthlyCount = users.reduce((acc, user) => {
          const month = new Date(user.birthDate).getMonth();
          acc[month] = (acc[month] || 0) + 1;
          return acc;
        }, {});

        setBirthdaysByMonth(monthlyCount);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <Box p={3}>
        <Typography variant="h4" textAlign="center" fontWeight={700} mb={4}>Levantamento - cadastros</Typography>
        <Charts
          birthdaysByMonth={birthdaysByMonth}
        />
      </Box>
    </Container>
  );
};

export default Home;
