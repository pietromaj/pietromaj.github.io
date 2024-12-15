import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css";

const name = "<Pietro.io />";
const logoUrl = "https://media.licdn.com/dms/image/v2/D4D03AQErw8OGzGr4HA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730108442809?e=1739404800&v=beta&t=KCW80xixIPg_2hqvC3v_8o8frjWgxXi-wJmnpl2pkIU";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="d=flex justify-content-between w-100">
          <div className="d-flex align-items-center">
          <MenuIcon sx={{ display: { xs: 'flex', md: 'none' } }} onClick={handleOpenNavMenu} />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink to="/blog">Blog</NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink to="/projects">Projects</NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink to="/about">About</NavLink>
                </MenuItem>

            </Menu>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-name" : ""}>
              <div className="name me-5">{name}</div>
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "navbar-link me-4 active" : "navbar-link me-4"}>
              <div>Blog</div>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "navbar-link me-4 active" : "navbar-link me-4"}>
              <div>Projects</div>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-link me-4 active" : "navbar-link me-4"}>
              <div>About</div>
            </NavLink>
          </div>
          <Avatar alt="Remy Sharp" src={logoUrl} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;