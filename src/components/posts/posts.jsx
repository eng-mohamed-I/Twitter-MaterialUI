import React from 'react';
import { Box, Card, CardHeader, Avatar, CardContent, Typography, IconButton, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShareIcon from '@mui/icons-material/Share';

const TweetCard = () => {
  return (
    <Card 
      sx={{ 
        backgroundColor: '#1e1e1e', 
        color: '#ffffff', 
        marginBottom: '20px', 
        padding: '10px',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'space-between',
        backgroundColor: 'black'
      }}
    >
      <CardHeader
        avatar={
          <Avatar src="https://via.placeholder.com/40" alt="User Avatar" />
        }
        title={
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            Mohamed Yassin
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ color: '#8899A6' }}>
            @kokowawa · 2h
          </Typography>
        }
      />

      <CardContent>
        <Typography variant="body1" sx={{ color: '#ffffff' }}>
          This is a sample tweet! 🚀 Hello X
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="comment" sx={{ color: '#8899A6' }}>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton aria-label="retweet" sx={{ color: '#8899A6' }}>
          <RepeatIcon />
        </IconButton>
        <IconButton aria-label="like" sx={{ color: '#8899A6' }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" sx={{ color: '#8899A6' }}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TweetCard;
