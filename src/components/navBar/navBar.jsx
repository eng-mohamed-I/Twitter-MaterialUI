import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: 'black', 
          backdropFilter: 'blur(5px)', // Backdrop filter for frosted glass effect
          boxShadow: 'none', // Remove default shadow
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="secondary"
              aria-label="navbar tabs"
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              <Tab label="For You" />
              <Tab label="Following" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
