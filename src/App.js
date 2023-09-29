import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Projects from './pages/Projects';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Contact from './components/Contact/Contact'
import Experience from './pages/Experience';
import Footer from './components/Footer/Footer';

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
        <Footer />
        {/* <Contact /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
