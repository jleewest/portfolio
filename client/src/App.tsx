import './css/App.css';
import Navbar from './Navbar';
import Home from './directory/Home';
import About from './directory/About';
import Projects from './directory/Projects';
import Contact from './directory/Contact';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
