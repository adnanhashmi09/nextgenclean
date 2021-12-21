import Button from './utils/Button';
import styles from '../styles/components/hero.module.scss';
import gsap from 'gsap';
import { useEffect } from 'react';

const Hero = ({ title, caption, button, image }) => {
  const { container, content, img } = styles;

  useEffect(() => {
    let tl = gsap.timeline();
    tl
      .from('#hero_content h2', {
        opacity: 0,
        duration: 0.5,
        x: -100,
        ease: 'expo.inOut',
      })
      .from(
        '#hero_content p',
        {
          opacity: 0,
          duration: 0.5,
          x: -100,
          ease: 'expo.inOut',
        },
        0.4,
      )
      .from('#hero_content a', {
        opacity: 0,
        duration: 0.3,
        x: -100,
        ease: 'expo.inOut',
      })
      .from('#hero_image', {
        opacity: 0,
        duration: 0.3,
      }),
      0.4;
  }, []);

  return (
    <header>
      <div id="hero_container" className={container}>
        <div id="hero_content" className={content}>
          <h2>{title}</h2>
          <p>{caption}</p>
          <Button href={button.href}>{button.name}</Button>
        </div>
        <div id="hero_image" className={img}>
          <img src={image.src} alt={image.alt} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
