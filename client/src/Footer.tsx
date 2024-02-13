import './css/Footer.css';

function Footer() {
  return (
    <div className='Footer background-image'>
      <nav className='my-2 my-sm-0 mr-sm-3'>
        <a
          className='text-dark menu-link'
          href='#home'
          title='Learn more about me'
        >
          Home
        </a>
        <a
          className='text-dark menu-link'
          href='#about'
          title='Learn more about me'
        >
          About
        </a>
        <a
          className='text-dark menu-link'
          href='#projects'
          title='View my work'
        >
          Projects
        </a>
        <a className='text-dark menu-link' href='#contact' title='Contact me'>
          Contact
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
