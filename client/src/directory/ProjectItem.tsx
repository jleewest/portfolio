import '../css/Projects.css';

type ProjectItemProps = {
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

function ProjectItem({ props }: ProjectItemProps) {
  return (
    <div
      className='ProjectItem'
      style={{
        backgroundColor: 'var(--primary-background)',
        borderColor: 'var(--primary-background)',
      }}
    >
      <div className='img-container'>
        <img
          src={props.img}
          alt={props.alt}
          className='img-fluid app-thumbnail'
          style={{ filter: 'var(--filter-img)' }}
        />
      </div>
      <div className='body-container'>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <p className='stack'>&lt;{props.stack}&gt;</p>
        <button
          className='link-button btn btn-dark'
          style={{ backgroundColor: 'var(--button-color)' }}
        >
          <a
            href={props.link}
            target='_blank'
            className='primary-link'
            style={{ color: 'var(--dark-color)' }}
          >
            See project
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProjectItem;
