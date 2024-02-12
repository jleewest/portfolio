import './Navbar.css';

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='navigation-section sticky-top'>
        <nav className='navbar navbar-expand-md bg-body-tertiary'>
          <div>
            <img
              src='/src/assets/profile.JPG'
              alt='professional profile picture thumbnail'
              width='20px'
              style={{ borderRadius: '50%' }}
              className='prof-pic-thumbnail'
            />
            <a className='navbar-brand' href='/'>
              Jenna Westendorf
            </a>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  aria-current='page'
                  href='/'
                  title='Home'
                >
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about' title='About'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#projects' title='Projects'>
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='mailto:jenna.westendorf@gmail.com'
                  title='Contact'
                >
                  Contact
                </a>
              </li>
              <li className='nav-item nav-moon theme-button' id='theme-button'>
                Dark Mode
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
