import './css/App.css';
import Navbar from './Navbar';
import Home from './directory/Home';
import About from './directory/About';
import Projects from './directory/Projects';
import Contact from './directory/Contact';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import nightMountain from '../public/assets/night-mountain.jpg';
import alpineMountain from '../public/assets/alpine-mountain.jpg';

function App() {
  //SET STYLES FOR DARK MODE TOGGLE
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const brightFont = darkMode ? 'black' : 'white';
  const darkFont = darkMode ? 'var(--light-font)' : 'white';
  const buttonColor = darkMode ? '#161719' : 'var(--dark-font)';
  const filterImg = darkMode ? `brightness(50%)` : `brightness(100%)`;
  const homeImg = darkMode ? nightMountain : alpineMountain;
  const primaryBackground = darkMode ? '#212529' : 'white';
  const accentBackground = darkMode
    ? 'rgba(30, 44, 47, 0.4)'
    : 'rgba(111, 142, 169, 0.4)';

  //RENDER DARK MODE TOGGLE
  useEffect(() => {
    document.documentElement.style.setProperty('--home-img', `url(${homeImg})`);
    document.documentElement.style.setProperty('--filter-img', filterImg);
    document.documentElement.style.setProperty('--button-color', buttonColor);
    document.documentElement.style.setProperty('--dark-color', darkFont);
    document.documentElement.style.setProperty('--bright-color', brightFont);
    document.documentElement.style.setProperty(
      '--primary-background',
      primaryBackground
    );
    document.documentElement.style.setProperty(
      '--accent-background',
      accentBackground
    );
    const backgroundColor = document.querySelector('.App');
    darkMode
      ? backgroundColor?.classList.add('dark-background')
      : backgroundColor?.classList.remove('dark-background');
  }, [
    darkMode,
    accentBackground,
    brightFont,
    buttonColor,
    darkFont,
    filterImg,
    homeImg,
    primaryBackground,
  ]);

  //TOGGLE DARK THEME
  function changeTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div className='App'>
      <Navbar changeTheme={changeTheme} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
