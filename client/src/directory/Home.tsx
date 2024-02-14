import '../css/Home.css';

type HomeProps = {
  backgroundImage: string;
};

function Home(props: HomeProps) {
  return (
    <div className='Home' id='home'>
      {' '}
      <div
        className='background-home home-background m-0'
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          color: 'var(--bright-color)',
        }}
      >
        <div className='container'>
          <h1>Jenna Westendorf</h1>
          <h2>&lt;Software Engineer from California&gt;</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
