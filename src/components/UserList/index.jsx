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
import { Link, useNavigate } from "react-router-dom";
import ConfirmationDialog from '../Dialogs/ConfirmationDialog';
import AlertDialog from "../Dialogs/AlertDialog";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [lastDeletedUser, setLastDeletedUser] = useState(null);
  const apiRef = useGridApiRef();
  const navigate = useNavigate();

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
    navigate("/register", { state: { user } });
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setOpenConfirmDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (userToDelete) {
      try {
        await axios.delete(`http://localhost:3100/v1/users/delete/${userToDelete._id}`);
        setUsers(users.filter((user) => user._id !== userToDelete._id));
        setLastDeletedUser(userToDelete);
        setOpenConfirmDialog(false);
        setOpenSuccessDialog(true);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleDeleteCancel = () => {
    setOpenConfirmDialog(false);
  };

  const handleSuccessDialogClose = () => {
    setOpenSuccessDialog(false);
  };

  const handleAddUser = () => {
    navigate("/register");
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
          onClick={() => handleDeleteClick(params.row)}
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
          {lastDeletedUser ? (
            <Alert severity="info">Último usuário deletado: {lastDeletedUser.firstName} {lastDeletedUser.lastName}</Alert>
          ) : null}
        </CardContent>
      </Card>
      <Button
        variant="contained"
        component={Link}
        to="/register"
        sx={{ marginTop: 1 }}
      >
        Novo
      </Button>

      <ConfirmationDialog
        open={openConfirmDialog}
        title="DELETAR"
        message={`Tem certeza que deseja deletar o usuário ${userToDelete?.firstName} ${userToDelete?.lastName}?`}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
      <AlertDialog
        open={openSuccessDialog}
        title="Deletado"
        message="Usuário deletado com sucesso!"
        onClose={handleSuccessDialogClose}
      />
    </Container>
  );
};

export default UserList;
