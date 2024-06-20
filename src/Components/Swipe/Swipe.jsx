import React from 'react';
import './Swipe.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

const Swipe = ({ onSwipe }) => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat" onClick={() => onSwipe('repeat')}>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left" onClick={() => onSwipe('left')}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star" onClick={() => onSwipe('star')}>
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right" onClick={() => onSwipe('favorite')}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning" onClick={() => onSwipe('lightning')}>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Swipe;
