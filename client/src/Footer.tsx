import './css/Footer.css';

function Footer() {
  return (
    <div className='Footer background-image'>
      <nav className='my-2 my-sm-0 mr-sm-3'>
        <a className='text-dark menu-link' href='/' title='Learn more about me'>
          Home
        </a>
        <a
          className='text-dark menu-link'
          href='/directory/about-me.html'
          title='Learn more about me'
        >
          About Me
        </a>
        <a
          className='text-dark menu-link'
          href='/directory/my-work.html'
          title='View my work'
        >
          My Work
        </a>
        <a
          className='text-dark menu-link'
          href='/directory/contact-me.html'
          title='Contact me'
        >
          Contact Me
        </a>
        <a
          className='footer-icon'
          href='https://www.linkedin.com/in/jenna-westendorf'
          title='View my LinkedIn profile'
          target='_blank'
        >
          <i
            className='fa-brands fa-linkedin menu-icon'
            style={{ color: '#0a0a0a' }}
          ></i>
        </a>
        <a
          className='footer-icon'
          href='https://github.com/jleewest'
          title='View my source code on GitHub'
          target='_blank'
        >
          <i
            className='fa-brands fa-square-github menu-icon'
            style={{ color: '#000000' }}
          ></i>
        </a>
        <a
          className='footer-icon'
          href='https://www.facebook.com/jenna.westendorf'
          title='Add me on Facebook'
          target='_blank'
        >
          <i
            className='fa-brands fa-square-facebook menu-icon'
            style={{ color: '#000000' }}
          ></i>
        </a>
      </nav>
    </div>
  );
}

export default Footer;
