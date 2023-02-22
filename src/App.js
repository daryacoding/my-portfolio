import './App.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
