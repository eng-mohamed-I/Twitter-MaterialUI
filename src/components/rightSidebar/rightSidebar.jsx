import React from 'react';
import { Box, Card, CardContent, Typography, TextField, IconButton, Avatar, List, ListItem, ListItemAvatar, ListItemText, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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

const RightSidebar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ width: '100%', p: 2  }}>
        {/* Search Box */}
        <Box sx={{  color: 'gray',  display: 'flex', alignItems: 'center', mb: 3 }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchIcon sx={{ color: 'gray' }} />
                </IconButton>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#151515',
                color: '#ffffff',
                borderRadius: '20px', // Increase the border-radius here
                '& fieldset': {
    
                },
                '&:hover fieldset': {
                  borderColor: '#ffffff',
                },
              },
              '& .MuiInputBase-input': {
                borderRadius: '20px', // Ensure the input itself also has rounded corners
              },
            }}
          />
        </Box>

        {/* Trending Hashtags */}
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">Trends</Typography>
            <List>
              {['#ReactJS', '#MaterialUI', '#JavaScript', '#WebDevelopment'].map((hashtag) => (
                <ListItem key={hashtag}>
                  <ListItemText primary={hashtag} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Who to Follow */}
        <Card>
          <CardContent>
            <Typography variant="h6">followers</Typography>
            <List>
              {[
                { name: 'Ahmed', username: '@ahmed1', avatar: 'https://via.placeholder.com/40' },
                { name: 'Mohamed', username: '@mohamed1', avatar: 'https://via.placeholder.com/40' },
              ].map((profile) => (
                <ListItem key={profile.username}>
                  <ListItemAvatar>
                    <Avatar src={profile.avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={profile.name} secondary={profile.username} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default RightSidebar;
