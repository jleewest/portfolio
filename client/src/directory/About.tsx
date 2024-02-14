import '../css/About.css';
import fullProfile from '../assets/full-profile.jpg';
import resume from '../assets/jenna-westendorf-resume.pdf';

function About() {
  return (
    <div className='About' id='about'>
      <div className='about-container'>
        <div className='header-container sm-header'>
          <h2>About Me</h2>
          <div>
            <a
              className='header-icon'
              href='https://www.linkedin.com/in/jenna-westendorf'
              title='View my LinkedIn profile'
              target='_blank'
            >
              <i
                className='fa-brands fa-linkedin'
                style={{ color: '#000000' }}
              ></i>
            </a>
            <a
              className='header-icon'
              href='https://github.com/jleewest'
              title='Explore my projects on GitHub'
              target='_blank'
            >
              <i
                className='fa-brands fa-square-github'
                style={{ color: '#000000' }}
              ></i>
            </a>
          </div>
        </div>
        <img
          src={fullProfile}
          alt='professional photo'
          title='Jenna Westendorf professional image'
          className='about-photo'
          style={{ filter: 'var(--filter-img)' }}
        />
        <div>
          <div className='header-container lg-header'>
            <h2>About Me</h2>
            <div>
              <a
                className='header-icon'
                href='https://www.linkedin.com/in/jenna-westendorf'
                title='View my LinkedIn profile'
                target='_blank'
              >
                <i
                  className='fa-brands fa-linkedin'
                  style={{ color: '#0a0a0a' }}
                ></i>
              </a>
              <a
                className='header-icon'
                href='https://github.com/jleewest'
                title='Explore my projects on GitHub'
                target='_blank'
              >
                <i
                  className='fa-brands fa-square-github'
                  style={{ color: '#000000' }}
                ></i>
              </a>
            </div>
          </div>
          <p className='skills'>
            &lt;Experienced with React, Typescript, Node.js, Express, MongoDB,
            SQL, Responsive Web Development, CSS, Figma, GitHub, APIs&gt;
          </p>
          <p>
            Whether I worked in the field of education, social work, or
            nonprofits, my career has always focused on advancing the capacity
            for people and organizations to achieve positive impacts. I am a
            highly motivated, self-driven team builder and outdoor enthusiast
            with an extensive background in organizational behavior, promoting
            psychologically safety in team development processes, project
            management, and a commitment to continuous learning.
          </p>
          <p>
            I have recently discovered a passion for software development, a
            field that allows me to apply my love for problem-solving and
            working with a team to develop innovate solutions that contribute to
            positive change. This journey into coding began over ten years ago,
            as I began exploring my own ideas of how applications and software
            can be applied to solve everyday problems and challenges. In the
            past year, I have immersed myself into the software development
            world, thriving on the endless opportunities to learn and apply new
            technologies. Through a career in software engineering, I am
            motivated to continue to push the boundaries of what a more
            equitable, inclusive, and sustainable world can look like. I thrive
            in environments that promote connection and challenge me to push my
            physical, mental, and emotional capabilities.
          </p>
          <p>
            When I am not programming, I enjoy mountain biking, rock climbing,
            salsa dancing, playing board games, and solving logic and crossword
            puzzles.
          </p>
          <div className='d-flex justify-content-end'>
            <button
              className='resume-button btn btn-dark'
              style={{ backgroundColor: 'var(--button-color)' }}
            >
              <a
                href={resume}
                target='_blank'
                download='Resume-Jenna Westendorf'
                className='primary-link resume'
                style={{ color: 'var(--dark-color)' }}
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
