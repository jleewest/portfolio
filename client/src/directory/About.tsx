import '../css/About.css';
import fullProfile from '../../public/assets/full-profile.jpg';
import resume from '../../public/assets/jenna-westendorf-resume.pdf';

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
            Fullstack Developer with a background in education, social work,
            nonprofits, and outdoor recreation.
          </p>
          <p>
            My career has always focused on advancing the capacity for people
            and organizations to achieve positive impacts. I am a highly
            motivated, self-driven team builder and outdoor enthusiast with an
            extensive background in organizational behavior, promoting
            psychological safety in team development processes, project
            management, and a commitment to continuous learning.
          </p>
          <p>
            My passion for software development emerges from my love for solving
            puzzles and working with a team to develop innovative solutions that
            contribute to positive change. This journey into coding began over
            ten years ago, as I began exploring my own ideas of how applications
            and software can be applied to solve everyday problems and
            challenges. Since I have immersed myself in the software development
            world, I have been thriving on the endless opportunities to learn
            and apply new technologies. I am motivated to continue to push the
            boundaries of what a more equitable, inclusive, and sustainable
            world can look like. I thrive in environments that promote
            connection and challenge me to push my physical, mental, and
            emotional capabilities.
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
