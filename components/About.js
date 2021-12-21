import styles from '../styles/components/about.module.scss';
import data from '../content/data.json';
import Button from './utils/Button';

// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.core.globals('ScrollTrigger', ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about_section',
        start: 'top 50%',
      },
    });

    tl.from('#about_section h1', {
      duration: 0.3,
      opacity: 0,
      ease: 'expo.inOut',
      x: -10,
    })
      .from('#about_section p', {
        duration: 0.5,
        opacity: 0,
        x: 20,
        ease: 'expo.inOut',
      })
      .from('#about_section a', {
        duration: 0.4,
        opacity: 0,
        x: 20,
        ease: 'expo.inOut',
      });
  }, []);

  const { about } = data.pages.home;

  return (
    <section id="about_section" className={styles.about}>
      <h1>{about.title}</h1>
      <p>{about.caption}</p>
      <Button href={about.button.href}>{about.button.name}</Button>
    </section>
  );
}

export default About;
