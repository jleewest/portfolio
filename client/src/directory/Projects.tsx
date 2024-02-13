import '../css/Projects.css';
import ProjectItem from './ProjectItem';

function Projects() {
  const featuredApps = [
    {
      id: 1,
      title: 'ShareWithOtter',
      body: `A fullstack application designed to take the stress out of splitting expenses with others.`,
      stack:
        'React, Typescript, Material UI, Chart.js, Vanilla CSS, Node.js, Express, Prisma, Postgres, Vitest, Cypress',
      img: '/src/assets/share-with-otter.png',
      alt: 'ShareWithOtter app preview',
      link: 'https://youtu.be/LrQ4M3MHrb8',
    },
    {
      id: 2,
      title: 'Community Collaboration Forum',
      body: `a full-stack application designed as a user-friendly forum for club members to communicate and collaborate.`,
      stack: 'React, Clerk, Node.js, Express, Postgres, Sequelize',
      img: '/src/assets/community-forum.png',
      alt: 'community collaboration app preview',
      link: 'https://youtu.be/TcZ7vQzzeEY',
    },
    {
      id: 3,
      title: 'Weather App',
      body: `An app capable of collecting current and forecasted weather from any
			city using geoloaction or a search bar with an additional ability
			to toggle between Fahrenheit and Celsius temperature displays.`,
      stack: 'HTML, CSS, Javascript',
      img: '/src/assets/weather-app.png',
      alt: 'weather app preview',
      link: 'https://delicate-bienenstitch-b69d3a.netlify.app/',
    },
    {
      id: 4,
      title: 'Basic Blackjack',
      body: `Try your hand at blackjack! An app capable of playing one-hand blackjack between one player and a computer`,
      stack: 'HTML, CSS, Javascript',
      img: '/src/assets/blackjack.png',
      alt: 'blackjack app preview',
      link: 'https://fluffy-panda-3bd4b9.netlify.app/',
    },
    {
      id: 5,
      title: 'Travel Homepage',
      body: `A responsive website homepage designed for a travel site.`,
      stack: 'HTML, CSS, Javascript',
      img: '/src/assets/travel-homepage.png',
      alt: 'travel homepage preview',
      link: 'https://moab-travel-project.netlify.app/',
    },
    {
      id: 6,
      title: 'World Clock App',
      body: `Check the time around the world, using a world clock API.`,
      stack: 'HTML, CSS, Javascript',
      img: '/src/assets/world-clock-app.png',
      alt: 'world clock app preview',
      link: 'https://world-clock-jw.netlify.app/',
    },
    {
      id: 7,
      title: 'Dictionary App',
      body: `Responsive web application using a dictionary API to render definitions and related images.`,
      stack: 'HTML, CSS, Javascript',
      img: '/src/assets/dictionary-app.png',
      alt: 'dictionary app preview',
      link: 'https://dictionary-project-jw.netlify.app/',
    },
    {
      id: 8,
      title: 'AI Storyteller',
      body: `An interactive app that uses AI to create children's stories with heartfelt morals.`,
      stack: 'HTML, CSS, Javascript',
      img: '/src/assets/AI-storyteller.png',
      alt: 'storyteller app preview',
      link: 'https://ai-practice-project.netlify.app/',
    },
  ];

  return (
    <div className='Projects' id='projects'>
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
