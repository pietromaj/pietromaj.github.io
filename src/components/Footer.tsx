import Container from '@mui/material/Container';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="xl" className="d-flex justify-content-between align-items-center">
        <div>Copyright © { (new Date()).getFullYear() }</div>
        <div>
          <a href="https://www.youtube.com/@tudoprogramado." target="_blank"><YouTubeIcon fontSize="large" className="me-3" /></a>
          <a href="https://www.linkedin.com/in/pietro-majowka-440020a7/" target="_blank"><LinkedInIcon fontSize="large" /></a>
        </div>
      </Container>
    </div>
  );
}
export default Footer;