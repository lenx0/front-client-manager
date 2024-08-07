import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

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
  TextField,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";

import { getUsers, deleteUser } from "../../api";

import ConfirmationDialog from "../dialogs/ConfirmationDialog";
import AlertDialog from "../dialogs/AlertDialog";
import { addNotification } from "../../features/notifications";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [lastDeletedUser, setLastDeletedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const apiRef = useGridApiRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
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
        await deleteUser(userToDelete._id);
        setUsers(users.filter((user) => user._id !== userToDelete._id));
        setLastDeletedUser(userToDelete);

        dispatch(
          addNotification({
            type: "deletado",
            user: userToDelete,
            timestamp: new Date().toISOString(),
          })
        );

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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <>
          <Box width="30px" height="30px" borderRadius="50%" backgroundColor="#05631d9e">
            <GridActionsCellItem
              icon={<EditOutlinedIcon sx={{ color: "#ffffff" }} />}
              label="Edit"
              onClick={() => handleEdit(params.row)}
            />
          </Box>
          <Box width="30px" height="30px" borderRadius="50%" backgroundColor="#630505a0">
            <GridActionsCellItem
              icon={<DeleteOutlinedIcon sx={{ color: "#ffffff" }} />}
              label="Delete"
              onClick={() => handleDeleteClick(params.row)}
            />
          </Box>
        </>,
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
      {loading ? (
        <Typography variant="body2">Carregamento demorado? desculpe, estou utilizando hospedagem gratuita, a primeira vez demora um pouquinho mas já já carrega</Typography>
      ): null}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Pesquisar usuários pelo nome"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ mb: 3 }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <DataGrid
          apiRef={apiRef}
          rows={filteredUsers}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 25]}
          loading={loading}
          initialState={{
            pagination: {
              paginationModel: { page: 1, pageSize: 10 },
            },
          }}
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
            <Alert severity="info">
              Último usuário deletado: {lastDeletedUser.firstName} {lastDeletedUser.lastName}
            </Alert>
          ) : null}
        </CardContent>
      </Card>
      <Button variant="contained" component={Link} to="/register" sx={{ marginTop: 1 }}>
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
