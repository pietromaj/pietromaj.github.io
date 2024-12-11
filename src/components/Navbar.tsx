import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';

const name = "<Pietro.io />";
const logoUrl = "https://media.licdn.com/dms/image/v2/D4D03AQErw8OGzGr4HA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730108442809?e=1739404800&v=beta&t=KCW80xixIPg_2hqvC3v_8o8frjWgxXi-wJmnpl2pkIU";

function NavBar() {
  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="d=flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <NavLink to="/">
              <div className="name me-5">{name}</div>
            </NavLink>
            <NavLink to="/projects" className="navbar-link me-4" activeclassname="active">
              <div>Projects</div>
            </NavLink>
            <NavLink to="/blog" className="navbar-link me-4" activeclassname="active">
              <div>Blog</div>
            </NavLink>
            <NavLink to="/about" className="navbar-link me-4" activeclassname="active">
              <div>about</div>
            </NavLink>
          </div>
          <Avatar alt="Remy Sharp" src={logoUrl} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;