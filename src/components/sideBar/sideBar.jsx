import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Sidebar = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundColor: '#1e1e1e', // Darker background for right sidebar
        padding: '20px',
        color: '#ffffff', // White text for dark mode
      }}
    >
      {/* Twitter Logo */}
      <IconButton color="primary">
        <TwitterIcon sx={{ color: '#1DA1F2', fontSize: 40 }} /> {/* Twitter blue */}
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
    </Box>
  );
};

export default Sidebar;
