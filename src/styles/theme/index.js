import { createTheme } from '@mui/material/styles';
import { grey, common } from '@mui/material/colors';

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
  palette: {
    mode: 'light',
    primary: {
      light: '#FFDED8',
      main: '#2b28f7ad',
      dark: '#9D2D18',
    },
    secondary: {
      light: '#CFF8EB',
      main: '#5ED6B0',
      dark: '#265949',
    },
    link: {
      light: '#E6F3FA',
      main: '#3D9CF7',
      dark: '#0054A5',
    },
    error: {
      light: '#FCE4E2',
      main: '#EB574C',
      dark: '#A8313A',
    },
    warning: {
      light: '#FDF5E1',
      main: '#F6C344',
      dark: '#AF832C',
    },
    success: {
      light: '#EAF8E2',
      main: '#17C964',
      dark: '#00784C',
    },
    info: {
      light: '#E6E0EF',
      main: '#673AB7',
      dark: '#220089',
    },
    step: {
      light: '#FF5B3B',
      main: '#FF5B3B',
      dark: '#FF5B3B',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
    h1: {
      fontSize: 34,
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
    },
    h4: {
      fontSize: 18,
      fontWeight: 600,
    },
    h5: {
      fontSize: 16,
      fontWeight: 600,
    },
    h6: {
      fontSize: 14,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 400,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
    },
    caption2: {
      fontSize: 8,
      fontWeight: 400,
    },
    overline: {
      fontSize: 12,
      fontWeight: 600,
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
        rounded: {
          borderRadius: 80,
        },
        roundedOutlined: {
          borderRadius: 80,
          backgroundColor: 'transparent',
          border: '1px solid',
        },
        colorPrimary: {
          backgroundColor: '#FFDED8',
          color: '#9D2D18',
        },
        colorSecondary: {
          backgroundColor: '#CFF8EB',
          color: '#265949',
        },
        colorInfo: {
          backgroundColor: '#E6E0EF',
          color: '#220089',
        },
        colorSuccess: {
          backgroundColor: '#EAF8E2',
          color: '#00784C',
        },
        colorError: {
          backgroundColor: '#FCE4E2',
          color: '#A8313A',
        },
        colorWarning: {
          backgroundColor: '#FDF5E1',
          color: '#AF832C',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlinedInherit: {
          borderColor: grey[200],
          color: 'black',
        },
        roundedOutlined: {
          fontSize: '14px',
          textTransform: 'lowercase',
          lineHeight: '17px',
          fontWeight: '400',
          border: '1px solid',
          borderRadius: '80px',
          borderColor: '#C8C6C9',
          background: common.white,
        },
        roundedOutlinedSuccess: {
          color: '#00784C',
          backgroundColor: '#EAF8E2',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            padding: '10px',
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
          marginLeft: 0,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root': {
            padding: '3px',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '.MuiSelect-outlined': {
            padding: '10px',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px',
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-completed': {
            color: '#5ED6B0',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          '&.Mui-expanded': {
            margin: '12px 0',
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: '700',
          top: 5,
          right: 5,
          padding: '0 2px',
        },
      },
    },
  },
});

export default theme;
