import styles from '../../styles/components/projects.module.scss';

//components
import ProjectCard from './ProjectCard';
// slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderStyles from '../../styles/components/projectSlider.module.scss';
import Slider from 'react-slick';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

function Projects({ data, type }) {
  const { heading } = styles;
  const { slider } = sliderStyles;

  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className={heading}>
        <h2>{type}</h2>
      </div>
      <div className={slider}>
        <Slider {...settings}>
          {data
            .reduce(function (rows, key, index) {
              return (
                (index % 2 == 0
                  ? rows.push([key])
                  : rows[rows.length - 1].push(key)) && rows
              );
            }, [])
            .map((projectGrp, index) => (
              <ProjectCard
                projectGrp={projectGrp}
                key={`ProjectGroup_${index}`}
              />
            ))}
        </Slider>
      </div>
    </section>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const { projectsLeft } = sliderStyles;
  return (
    <div
      className={`${className} ${projectsLeft}`}
      style={{
        ...style,
        display: 'block',
      }}
      onClick={onClick}
    >
      <GrFormNext />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const { projectsRight } = sliderStyles;
  return (
    <div
      className={`${className} ${projectsRight}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <GrFormPrevious />
    </div>
  );
}

export default Projects;
