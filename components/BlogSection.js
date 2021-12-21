import styles from '../styles/components/blog.module.scss';
import BlogCard from './utils/BlogCard';

// slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderStyles from '../styles/components/slider.module.scss';
import Slider from 'react-slick';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const BlogSection = ({ blogs }) => {
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
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
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
    <section style={{ padding: '6rem 0' }}>
      <div className={heading}>
        <h2>From the Blog</h2>
      </div>
      <div className={slider}>
        <Slider {...settings}>
          {blogs.map((post, i) => (
            <BlogCard post={post} key={i} />
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

export default BlogSection;
