import '../css/Projects.css';

type AppProps = {
  props: {
    id: number;
    title: string;
    body: string;
    stack: string;
    img: string;
    alt: string;
    link: string;
  };
};

function ProjectItem({ props }: AppProps) {
  return (
    <div className='ProjectItem'>
      <div className='img-container'>
        <img
          src={props.img}
          alt={props.alt}
          className='img-fluid app-thumbnail'
        />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <p>&lt;{props.stack}&gt;</p>
        <button className='link-button btn btn-dark border'>
          <a href={props.link} target='_blank' className='primary-link'>
            See project
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProjectItem;
