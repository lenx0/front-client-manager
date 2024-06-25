import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Container } from '@mui/material';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3100/v1/users/list');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
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
    { field: 'moment', headerName: 'Created At', width: 180 },
  ];

  const rows = users.map((user, index) => ({
    id: index + 1,
    ...user,
  }));

  return (
    <Container>
      <h2>Users List</h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[5]}
          loading={loading}
          pagination
          paginationMode="client"
        />
      </div>
    </Container>
  );
};

export default UserList;
