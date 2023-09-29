import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Nav from './components/Nav/Nav'
import Experience from './pages/Experience/Experience';
import Footer from './components/Footer/Footer';
import ProjectDisplay from './pages/ProjectDisplay/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
        {/* <Contact /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
