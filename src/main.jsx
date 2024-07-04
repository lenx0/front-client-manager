import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { ThemeProvider } from '@emotion/react'
// import lightTheme from '@components/styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={lightTheme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
)
