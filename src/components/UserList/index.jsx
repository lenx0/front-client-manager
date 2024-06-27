import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3100/v1/users/list');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'birthDate', headerName: 'Birth Date', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'moment', headerName: 'Created At', width: 280 },
  ];

  const rows = users.map((user, index) => ({
    id: index + 1,
    ...user,
  }));

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', height: '70vh' }}>
      <Typography variant="h4" pb={3} color={theme.palette.text.primary}>
        Clientes
      </Typography>
      <Box sx={{ flexGrow: 1, bgcolor: theme.palette.background.paper, boxShadow: 1, borderRadius: 2, p: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          loading={loading}
          pagination
          components={{
            Toolbar: GridToolbar,
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 1, pageSize: 5 }
            },
            sorting: {
              sortModel: [{ field: 'orderDate', sort: 'desc' }]
            }
          }}
          sx={{
            '& .MuiDataGrid-row': {
              borderBottom: `1px solid ${theme.palette.divider}`,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            },
            '& .MuiDataGrid-cell': {
              padding: '12px 16px',
            },
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: theme.palette.background.default,
              fontWeight: 'bold',
              padding: '12px 16px',
            },
            '& .MuiDataGrid-columnSeparator': {
              display: 'none',
            },
          }}
        />
      </Box>
      <Box pt={2} textAlign="right">
        <Button variant="contained" component={Link} to="/register" color="primary">
          Novo
        </Button>
      </Box>
    </Container>
  );
};

export default UserList;
