import styles from '../styles/components/clientsBanner.module.scss';

//Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ClientsBanner({ clients }) {
  const settings = {
    accessibility: false,
    draggable: true,
    autoplay: true,
    infinite: true,
    pauseOnFocus: true,
    pauseOnHover: false,
    autoplaySpeed: 750,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className={styles.heading}>
        <h2>Our Clients</h2>
      </div>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div className={styles.card} key={index}>
            <img
              src={client.fields.image.fields.file.url}
              alt={client.fields.title}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ClientsBanner;
