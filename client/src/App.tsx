import './css/App.css';
import Navbar from './Navbar';
import Home from './directory/Home';
import About from './directory/About';
import Projects from './directory/Projects';
import Contact from './directory/Contact';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [backgroundImage, setBackgroundImage] = useState<string>(
    '/src/assets/alpine-mountain.jpg'
  );
  const [backgroundColor, setBackgroundColor] = useState<string>('white');
  const brightColor = darkMode ? 'black' : 'white';

  useEffect(() => {
    document.documentElement.style.setProperty('--bright-color', brightColor);
    const backgroundColor = document.querySelector('.App');
    if (darkMode) {
      backgroundColor?.classList.add('dark-background');
      setBackgroundImage('/src/assets/night-mountain.jpg');
      setBackgroundColor(' #212529');
    } else {
      backgroundColor?.classList.remove('dark-background');
      setBackgroundImage('/src/assets/alpine-mountain.jpg');
      setBackgroundColor('white');
    }
  }, [darkMode, brightColor]);

  function changeTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div className='App'>
      <Navbar changeTheme={changeTheme} />
      <Home backgroundImage={backgroundImage} />
      <About />
      <Projects backgroundColor={backgroundColor} />
      <Contact />
      <Footer backgroundColor={backgroundColor} />
    </div>
  );
}

export default App;
