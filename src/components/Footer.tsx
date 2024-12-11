import Container from '@mui/material/Container';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="xl" className="d-flex justify-content-between align-items-center">
        <div>Copyright © { (new Date()).getYear()  + 1900 }</div>
        <div>
          <YouTubeIcon fontSize="large" className="me-3" />
          <LinkedInIcon fontSize="large" />
        </div>
      </Container>
    </div>
  );
}
export default Footer;