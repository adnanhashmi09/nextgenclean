import styles from '../styles/components/services.module.scss';
import ServiceCard from './utils/ServiceCard';

// slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderStyles from '../styles/components/slider.module.scss';
import Slider from 'react-slick';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Services = ({ services }) => {
  const { heading } = styles;
  const { slider } = sliderStyles;

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        <h2>Services and Solutions</h2>
      </div>
      <div className={slider}>
        <Slider {...settings}>
          {services.map((service, index) => (
            <ServiceCard service={service} key={`serviceCard_${index}`} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const { nextArrow } = sliderStyles;
  return (
    <div
      className={`${className} ${nextArrow}`}
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
  const { prevArrow } = sliderStyles;
  return (
    <div
      className={`${className} ${prevArrow}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <GrFormPrevious />
    </div>
  );
}

export default Services;
