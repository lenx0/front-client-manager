import { Box, Grid } from '@mui/material'
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import Header from './components/Layout/Header'
import Sidebar from './components/Layout/Sidebar'
import Home from './components/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        {/* <Grid item xs={2}> */}
        <Grid item>
          <Sidebar />
        </Grid>
        {/* <Grid item xs={10}> */}
        <Grid item>
          <Box margin="120px 50px 50px 50px">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<UserForm />} />
              {/* <Route path="/users" element={<UserList />} /> */}
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </BrowserRouter>
  )
}

export default App
