import './css/Navbar.css';

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='navigation-section sticky-top'>
        <nav className='navbar navbar-expand-md bg-body-tertiary'>
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
          <div className='collapse navbar-collapse justify-content-start'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  aria-current='page'
                  href='#home'
                  title='Home'
                >
                  Home
                </a>
              </li>
              <li>
                <a className='nav-link' href='#about' title='About'>
                  About
                </a>
              </li>
              <li>
                <a className='nav-link' href='#projects' title='Projects'>
                  Projects
                </a>
              </li>
              <li>
                <a className='nav-link' href='#contact' title='Contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='nav-item nav-moon theme-button mx-2'>Dark Mode</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
