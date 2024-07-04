import React from 'react';
import { Grid, ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import lightTheme from './components/styles/theme/lightTheme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <ThemeProvider theme={lightTheme}> */}
          <CssBaseline />
          <BrowserRouter>
            <Grid container>
              <Grid item xs={12}>
                <Header />
              </Grid>
              <Grid item>
                <Sidebar />
              </Grid>
              <Grid item>
                <Grid margin="120px 50px 50px 50px">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<UserForm />} />
                    <Route path="/users" element={<UserList />} />
                  </Routes>
                </Grid>
              </Grid>
            </Grid>
          </BrowserRouter>
        {/* </ThemeProvider> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
