import './css/App.css';
import Navbar from './Navbar';
import Home from './directory/Home';
import About from './directory/About';
import Projects from './directory/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
