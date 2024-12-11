import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import Projects from './components/pages/Projects/Projects';

function App() {
  return (
    <Router>
      <Navbar position="static" />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
