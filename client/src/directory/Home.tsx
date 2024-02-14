import '../css/Home.css';

function Home() {
  return (
    <div className='Home' id='home'>
      {' '}
      <div
        className='background-home home-background m-0'
        style={{
          backgroundImage: 'var(--home-img)',
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
