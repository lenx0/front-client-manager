import { Box } from '@mui/material'
import './App.css'
import UserForm from './components/UserForm'
import UsersList from './components/UsersList'

function App() {

  return (
    <Box sx={{ padding: '50px' }}>
      <UserForm />
      <UsersList />
    </Box>
  )
}

export default App
