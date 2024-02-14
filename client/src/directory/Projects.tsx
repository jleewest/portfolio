import '../css/Projects.css';
import ProjectItem from './ProjectItem';
import aiStoryteller from '../assets/ai-storyteller.png';
import dictionary from '../assets/dictionary-app.png';
import worldClock from '../assets/world-clock-app.png';
import travelPage from '../assets/travel-homepage.png';
import blackjack from '../assets/blackjack.png';
import weatherApp from '../assets/weather.png';
import communityForum from '../assets/community-forum.png';
import shareWithOtters from '../assets/share-with-otters.png';

function Projects() {
  const featuredApps = [
    {
      id: 1,
      title: 'ShareWithOtters',
      body: `A fullstack application designed to take the stress out of splitting expenses with others.`,
      stack:
        'React, Typescript, Material UI, Chart.js, Vanilla CSS, Node.js, Express, Prisma, Postgres, Vitest, Cypress',
      img: shareWithOtters,
      alt: 'ShareWithOtters app preview',
      link: 'https://youtu.be/LrQ4M3MHrb8',
    },
    {
      id: 2,
      title: 'Community Collaboration Forum',
      body: `A full-stack application designed as a user-friendly forum for club members to communicate and collaborate.`,
      stack: 'React, Clerk, Node.js, Express, Postgres, Sequelize',
      img: communityForum,
      alt: 'community collaboration app preview',
      link: 'https://youtu.be/TcZ7vQzzeEY',
    },
    {
      id: 3,
      title: 'Weather App',
      body: `An app capable of collecting current and forecasted weather from any
			city using geolocation or a search bar with an additional ability
			to toggle between Fahrenheit and Celsius temperature displays.`,
      stack: 'HTML, CSS, Javascript',
      img: weatherApp,
      alt: 'weather app preview',
      link: 'https://delicate-bienenstitch-b69d3a.netlify.app/',
    },
    {
      id: 4,
      title: 'Blackjack',
      body: `Try your hand at blackjack! An app capable of playing one-hand blackjack between one player and a computer`,
      stack: 'HTML, CSS, Javascript',
      img: blackjack,
      alt: 'blackjack app preview',
      link: 'https://blackjack-jw.netlify.app/',
    },
    {
      id: 5,
      title: 'Travel Homepage',
      body: `A responsive website homepage designed for a travel site.`,
      stack: 'HTML, CSS, Javascript',
      img: travelPage,
      alt: 'travel homepage preview',
      link: 'https://moab-travel-project.netlify.app/',
    },
    {
      id: 6,
      title: 'World Clock App',
      body: `Check the time around the world, using a world clock API.`,
      stack: 'HTML, CSS, Javascript',
      img: worldClock,
      alt: 'world clock app preview',
      link: 'https://world-clock-jw.netlify.app/',
    },
    {
      id: 7,
      title: 'Dictionary App',
      body: `Responsive web application using a dictionary API to render definitions and related images.`,
      stack: 'HTML, CSS, Javascript',
      img: dictionary,
      alt: 'dictionary app preview',
      link: 'https://dictionary-project-jw.netlify.app/',
    },
    {
      id: 8,
      title: 'AI Storyteller',
      body: `An interactive app that uses AI to create children's stories with heartfelt morals.`,
      stack: 'HTML, CSS, Javascript',
      img: aiStoryteller,
      alt: 'storyteller app preview',
      link: 'https://ai-practice-project.netlify.app/',
    },
  ];

  return (
    <div
      className='Projects'
      id='projects'
      style={{ backgroundColor: 'var(--accent-background)' }}
    >
      <h2>Featured Projects</h2>
      <div className='project-item-container'>
        {featuredApps.map((app) => {
          return <ProjectItem props={app} key={app.id} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
