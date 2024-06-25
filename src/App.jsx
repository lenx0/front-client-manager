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
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<UserForm />} />
            {/* <Route path="/users" element={<UserList />} /> */}
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  )
}

export default App
