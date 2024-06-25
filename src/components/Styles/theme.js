import { createTheme } from '@mui/material'

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640, 
        md: 800, 
        lg: 1200,   
        xl: 1536,     
      },
    },
  });

export default theme
