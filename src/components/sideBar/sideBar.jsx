import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, IconButton, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import XIcon from '@mui/icons-material/X';

const Sidebar = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'black', // Darker background for right sidebar
        padding: '20px',
        color: '#ffffff', // White text for dark mode
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // To push "Post" button to the bottom
      }}
    >
      {/* Logo X icon */}
      <IconButton color="primary">
        <XIcon sx={{ color: '#1DA1F2', fontSize: 40 }} /> {/* X icon */}
      </IconButton>

      {/* Menu List */}
      <List sx={{ marginTop: '20px' }}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon sx={{ color: '#ffffff' }} /> {/* Icon color: white */}
          </ListItemIcon>
          <ListItemText primary="Home" sx={{ color: '#ffffff' }} /> {/* Text color: white */}
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <SearchIcon sx={{ color: '#ffffff' }} />
          </ListItemIcon>
          <ListItemText primary="Explore" sx={{ color: '#ffffff' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon sx={{ color: '#ffffff' }} />
          </ListItemIcon>
          <ListItemText primary="Notifications" sx={{ color: '#ffffff' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <MailOutlineIcon sx={{ color: '#ffffff' }} />
          </ListItemIcon>
          <ListItemText primary="Messages" sx={{ color: '#ffffff' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <BookmarkBorderIcon sx={{ color: '#ffffff' }} />
          </ListItemIcon>
          <ListItemText primary="Bookmarks" sx={{ color: '#ffffff' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ListAltIcon sx={{ color: '#ffffff' }} />
          </ListItemIcon>
          <ListItemText primary="Lists" sx={{ color: '#ffffff' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <PersonOutlineIcon sx={{ color: '#ffffff' }} />
          </ListItemIcon>
          <ListItemText primary="Profile" sx={{ color: '#ffffff' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <MoreHorizIcon sx={{ color: '#ffffff' }} />
          </ListItemIcon>
          <ListItemText primary="More" sx={{ color: '#ffffff' }} />
        </ListItem>
      </List>

      {/* Add Post Button */}
      <Box sx={{ paddingBottom: '20px', textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1DA1F2', // Primary Twitter color
            color: '#ffffff',
            width: '100%',
            borderRadius: '30px', // Rounded corners for the button
            padding: '10px 0',
            fontSize: '16px',
            textTransform: 'none', // Remove uppercase transformation
          }}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
