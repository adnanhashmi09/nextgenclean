import styles from '../styles/components/caseStudy.module.scss';
import { useEffect } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

const CaseStudy = ({ content }) => {
  const { page_heading, before_after, paragraph } = styles;
  useEffect(() => {
    const slider = document.querySelector('#image-comparison-slider');
    const sliderImgWrapper = document.querySelector(
      '#image-comparison-slider .img-wrapper',
    );
    const sliderHandle = document.querySelector(
      '#image-comparison-slider .handle',
    );

    slider.addEventListener('mousemove', sliderMouseMove);
    slider.addEventListener('touchmove', sliderMouseMove);

    function sliderMouseMove(event) {
      if (isSliderLocked) return;

      const sliderLeftX = slider.offsetLeft;
      const sliderWidth = slider.clientWidth;
      const sliderHandleWidth = sliderHandle.clientWidth;

      let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
      if (mouseX < 0) mouseX = 0;
      else if (mouseX > sliderWidth) mouseX = sliderWidth;

      sliderImgWrapper.style.width = `${(
        (1 - mouseX / sliderWidth) *
        100
      ).toFixed(4)}%`;
      sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(
        4,
      )}% - ${sliderHandleWidth / 2}px)`;
    }

    let isSliderLocked = false;

    slider.addEventListener('mousedown', sliderMouseDown);
    slider.addEventListener('touchstart', sliderMouseDown);
    slider.addEventListener('mouseup', sliderMouseUp);
    slider.addEventListener('touchend', sliderMouseUp);
    slider.addEventListener('mouseleave', sliderMouseLeave);

    function sliderMouseDown(event) {
      if (isSliderLocked) isSliderLocked = false;
      sliderMouseMove(event);
    }

    function sliderMouseUp() {
      if (!isSliderLocked) isSliderLocked = true;
    }

    function sliderMouseLeave() {
      if (isSliderLocked) isSliderLocked = false;
    }
  }, []);

  return (
    <section style={{ padding: '7rem 0 12rem' }}>
      <div className={page_heading}>
        <h2>Case Study</h2>
        <h3>{content.title}</h3>
      </div>
      <div className={before_after}>
        <div id="image-comparison-slider">
          <img
            src="https://www.dropbox.com/s/h8rds5ozk0u3s2f/coder.jpg?raw=1"
            alt="before"
          />
          <div className="img-wrapper">
            <img
              src="https://www.dropbox.com/s/pem8kaorr488apn/universe.jpg?raw=1"
              alt="after"
            />
          </div>
          <span className="label label-before">Before</span>
          <span className="label label-after">After</span>
          <div className="handle">
            <div className="handle-line"></div>
            <div className="handle-circle">
              <BsChevronLeft />
              <BsChevronRight />
            </div>
            <div className="handle-line"></div>
          </div>
        </div>
      </div>
      {/* <p className={paragraph}>{content.description}</p> */}
    </section>
  );
};

export default CaseStudy;
