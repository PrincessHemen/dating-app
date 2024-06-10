import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import logo from '../Assets/dating-app.png'

const Header = () => {
  return (
    <div className="header">
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
                <img className="header__logo" src={logo} alt="header" />
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>
    </div>
  )
}

export default Header