import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const name = "<Pietro.io />";
const logoUrl = "https://media.licdn.com/dms/image/v2/D4D03AQErw8OGzGr4HA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730108442809?e=1739404800&v=beta&t=KCW80xixIPg_2hqvC3v_8o8frjWgxXi-wJmnpl2pkIU";

function NavBar() {
  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="d=flex justify-content-between w-100">
          <div className="d-flex align-items-center">
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