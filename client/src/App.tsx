import './css/App.css';
import Navbar from './Navbar';
import Home from './directory/Home';
import About from './directory/About';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
