import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import Projects from './components/pages/Projects/Projects';
import PostPage from './components/pages/Blog/PostPage/PostPage';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column h-100 overflow-hidden">
        <Navbar />
        <div className="app-body">
          <Container maxWidth="xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/post/:postId" element={<PostPage />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
