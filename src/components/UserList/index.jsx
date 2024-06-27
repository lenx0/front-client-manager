import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  GridActionsCellItem,
  useGridApiRef,
} from "@mui/x-data-grid";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import axios from "axios";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiRef = useGridApiRef();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3100/v1/users/list");
        const usersWithIds = response.data.map((user, index) => ({
          id: index + 1,
          ...user,
        }));
        setUsers(usersWithIds);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    console.log("Edit user:", user);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3100/v1/users/delete/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleAddUser = () => {
    console.log("Add new user");
  };

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditOutlinedIcon />}
          label="Edit"
          onClick={() => handleEdit(params.row)}
        />,
        <GridActionsCellItem
          icon={<DeleteOutlinedIcon />}
          label="Delete"
          onClick={() => handleDelete(params.row._id)}
        />,
      ],
    },
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 190 },
    { field: "lastName", headerName: "Last Name", width: 190 },
    { field: "birthDate", headerName: "Birth Date", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "moment", headerName: "Created At", width: 200 },
  ];

  return (
    <Container maxWidth="xl">
      <Typography variant="h1" pb={5} color="#292828">
        Clientes
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <DataGrid
          apiRef={apiRef}
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 25]}
          loading={loading}
          components={{
            Toolbar: () => (
              <GridToolbarContainer>
                <GridToolbarQuickFilter />
                <GridToolbarFilterButton />
                <Button
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={handleAddUser}
                >
                  Add User
                </Button>
              </GridToolbarContainer>
            ),
          }}
          autoHeight
        />
      </Box>
      <Card variant="outlined" style={{ marginTop: "20px" }}>
        <CardContent>
          <Alert severity="info">Please select a user to see details</Alert>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        component={Link}
        to="/register"
        sx={{
          marginTop: 1
        }}>
        Novo
      </Button>
    </Container>
  );
};

export default UserList;
