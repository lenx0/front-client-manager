import { Box, Grid } from '@mui/material'
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
      <UserForm />
      <UserList />
      </Grid>
      </Grid>
  )
}

export default App
