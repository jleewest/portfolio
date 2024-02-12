import '../css/About.css';

function About() {
  return (
    <div className='About'>
      <img
        src='/src/assets/full-profile.JPG'
        alt='professional photo'
        title='Jenna Westendorf professional image'
        className='about-photo border img-fluid rounded'
      />
      <div>
        <h2>About me</h2>
        <p>
          Whether I worked in the field of education, social work, or
          nonprofits, my career has always focused on advancing the capacity for
          people and organizations to achieve positive impacts. I am a highly
          motivated, self-driven team builder and outdoor enthusiast with an
          extensive background in organizational behavior, promoting
          psychologically safety in team development processes, project
          management, and a commitment to continuous learning.
        </p>
        <p>
          I have recently discovered a passion for software development, a field
          that allows me to apply my love for problem-solving and working with a
          team to develop innovate solutions that contribute to positive change.
          This journey into coding began over ten years ago, as I began
          exploring my own ideas of how applications and software can be applied
          to solve everyday problems and challenges. In the past year, I have
          immersed myself into the software development world, thriving on the
          endless opportunities to learn and apply new technologies. Through a
          career in software engineering, I am motivated to continue to push the
          boundaries of what a more equitable, inclusive, and sustainable world
          can look like. I thrive in environments that promote connection and
          challenge me to push my physical, mental, and emotional capabilities.
        </p>
        <p>
          When I am not programming, I enjoy mountain biking, rock climbing,
          salsa dancing, playing board games, and solving logic and crossword
          puzzles.
        </p>
        <p className='text-center fw-bold'>
          &lt;Experienced with React, Typescript, Node.js, Express, MongoDB,
          SQL, Responsive Web Development, CSS, Figma, GitHub, APIs&gt;
        </p>
        <button className='link-button btn btn-dark border'>
          <a
            href='https://www.linkedin.com/in/
jenna-westendorf'
            target='_blank'
            title='Jenna Westendorf LinkedIn page'
            className='primary-link'
          >
            Learn more about me on LinkedIn
          </a>
        </button>
        <button className='link-button btn btn-dark border'>
          <a
            href='https://www.linkedin.com/in/
jenna-westendorf'
            target='_blank'
            title='Jenna Westendorf GitHub page'
            className='primary-link'
          >
            Explore my GitHub
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
