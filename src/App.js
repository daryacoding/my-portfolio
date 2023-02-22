import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
