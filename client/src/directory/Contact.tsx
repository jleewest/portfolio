import '../css/Contact.css';

function Contact() {
  return (
    <div className='Contact' id='contact'>
      <h2>Contact Me</h2>
      <h3>&lt;Let's get in touch!&gt;</h3>
      <div className='contact-block'>
        <ul>
          <li>
            <i className='contact-icon fa-solid fa-envelope'></i>
            <a
              href='mailto:jenna.westendorf@gmail.com'
              target='_blank'
              className='contact'
            >
              jenna.westendorf@gmail.com
            </a>
          </li>
          <li>
            <i className='contact-icon fa-solid fa-square-phone'></i>
            <a href='tel:+19169954351' target='_blank' className='contact'>
              (916)995-4351
            </a>
          </li>
          <li>
            <i className='contact-icon fa-brands fa-linkedin'></i>
            <a
              href='https://www.linkedin.com/in/
jenna-westendorf'
              target='_blank'
              className='contact'
            >
              /jenna-westendorf
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;