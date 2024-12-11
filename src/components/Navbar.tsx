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
import { Link } from 'react-router-dom';

const name = "<Pietro.io />";
const logoUrl = "https://media.licdn.com/dms/image/v2/D4D03AQErw8OGzGr4HA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730108442809?e=1739404800&v=beta&t=KCW80xixIPg_2hqvC3v_8o8frjWgxXi-wJmnpl2pkIU";

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="d=flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <Link to="/">
              <div className="name me-5">{name}</div>
            </Link>
            <Link to="/projects" className="navbar-link me-4">
              <div>Projects</div>
            </Link>
            <Link to="/blog" className="navbar-link me-4">
              <div>Blog</div>
            </Link>
            <Link to="/about" className="navbar-link me-4">
              <div>about</div>
            </Link>
          </div>
          <Avatar alt="Remy Sharp" src={logoUrl} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;