import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/components/navbar.module.scss';
import data from '../content/data.json';
import Button from './utils/Button';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const { navbar } = data;
  const [isActive, setIsActive] = useState(false);
  const [scrollState, setScrollState] = useState(false);

  const hamburgerClick = e => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let lastScroll = 0;

    const scrollCheck = e => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setScrollState(false);
        return;
      }

      if (currentScroll > lastScroll) {
        setScrollState('down');
      } else if (currentScroll < lastScroll) {
        setScrollState('up');
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', scrollCheck);
    return () => {
      window.removeEventListener('scroll', scrollCheck);
    };
  }, []);
  return (
    <>
      <nav
        className={`${styles.navbar} ${scrollState ? styles[scrollState] : ''}`}
      >
        <Link href="/">
          <a className={styles.logo}>
            <svg viewBox="0 0 320 154.50514823634">
              <g
                featurekey="symbolFeature-0"
                transform="matrix(1.5429405806839547,0,0,1.5429405806839547,727.3421803170543,-757.5269913364979)"
                fill="#009473"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M-409.5,525.3h-61.9l4.3,56.1c0.4,5.8,3.9,9.7,9.7,9.7h33.9c5.8,0,9.2-3.9,9.7-9.7L-409.5,525.3z M-412.1,504.3l-48.5-13  c-7.5-2-9.5,5.4-10.5,9.2l63.5,17C-406.6,513.8-404.6,506.3-412.1,504.3z"
                />
              </g>
              <g
                featurekey="nameFeature-0"
                transform="matrix(2.1566895723338484,0,0,2.1566895723338484,116.63017357161809,25.897451033223156)"
                fill="#009473"
              >
                <path d="M1.5625 7.93 l18.887 17.988 l0 -17.402 l6.3086 0 l0 32.07 l-18.887 -18.008 l0 17.422 l-6.3086 0 l0 -32.07 z M45.0003125 8.359000000000002 l0.019531 0.058594 c2.1875 0 4.2383 0.41016 6.1719 1.25 s3.6328 1.9727 5.0977 3.3984 l-4.4922 4.4922 c-1.8945 -1.875 -4.1406 -2.8125 -6.7383 -2.8125 c-2.6367 0 -4.8828 0.9375 -6.7383 2.8125 s-2.793 4.1211 -2.793 6.7383 c0 2.6367 0.9375 4.8828 2.793 6.7383 s4.1016 2.793 6.7383 2.793 c2.0703 0 3.9258 -0.58594 5.5469 -1.7773 s2.7734 -2.7148 3.4375 -4.5703 l-9.0039 0 l0 -6.3477 l9.0039 0 l3.6914 0 l2.8906 0 c0.21484 0.99609 0.3125 2.0508 0.3125 3.1641 c0 4.375 -1.5625 8.125 -4.6875 11.23 s-6.875 4.668 -11.25 4.668 s-8.125 -1.5625 -11.23 -4.668 s-4.668 -6.8555 -4.668 -11.23 s1.5625 -8.125 4.668 -11.25 s6.8555 -4.6875 11.23 -4.6875 z M78.3596875 8.359000000000002 l0.019531 0.058594 c2.1875 0 4.2383 0.41016 6.1719 1.25 s3.6328 1.9727 5.0977 3.3984 l-4.4922 4.4922 c-1.8945 -1.875 -4.1406 -2.8125 -6.7383 -2.8125 c-2.6367 0 -4.8828 0.9375 -6.7383 2.8125 s-2.793 4.1211 -2.793 6.7383 c0 2.6367 0.9375 4.8828 2.793 6.7383 s4.1016 2.793 6.7383 2.793 c2.0703 0 3.9258 -0.58594 5.5469 -1.7773 s2.7734 -2.7148 3.4375 -4.5703 l-9.0039 0 l0 -6.3477 l9.0039 0 l3.6914 0 l2.8906 0 c0.21484 0.99609 0.3125 2.0508 0.3125 3.1641 c0 4.375 -1.5625 8.125 -4.6875 11.23 s-6.875 4.668 -11.25 4.668 s-8.125 -1.5625 -11.23 -4.668 s-4.668 -6.8555 -4.668 -11.23 s1.5625 -8.125 4.668 -11.25 s6.8555 -4.6875 11.23 -4.6875 z" />
              </g>
            </svg>
          </a>
        </Link>
        <div className={styles.mainLinks}>
          {navbar.links.map(link => {
            if (link.name == 'Services') {
              return (
                <a className={styles.navLink}>
                  {link.name}
                  <div className={styles.sublinksBox}>
                    {link.sublinks.map(sublink => (
                      <Link href={sublink.href} key={sublink.name}>
                        <a className={styles.sublink}>{sublink.name}</a>
                      </Link>
                    ))}
                  </div>
                </a>
              );
            }
            return (
              <Link href={link.href} key={link.name}>
                <a className={styles.navLink}> {link.name}</a>
              </Link>
            );
          })}
          <Button href={navbar.button.href} modifierClass="navbtn">
            {navbar.button.name}
          </Button>
        </div>

        <div
          role="button"
          tabIndex={0}
          className={styles.hamburger}
          onClick={hamburgerClick}
        >
          <HiOutlineMenuAlt3 className={styles.icon} />
        </div>
      </nav>
      <aside
        className={
          isActive ? `${styles.aside} ${styles.active}` : `${styles.aside}`
        }
      >
        <div
          role="button"
          tabIndex={0}
          className={styles.hamburger}
          onClick={hamburgerClick}
        >
          <IoMdClose className={styles.icon} />
        </div>
        <div className={styles.aside__mainLinks}>
          {navbar.links.map(link => {
            if (link.name == 'Services') {
              return (
                <Link href={link.href} key={link.name}>
                  <a className={styles.aside__navLink}>
                    {link.name}
                    <div className={styles.aside__sublinksBox}>
                      {link.sublinks.map(sublink => (
                        <Link href={sublink.href} key={sublink.name}>
                          <a className={styles.aside__sublink}>
                            {sublink.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </a>
                </Link>
              );
            }
            return (
              <Link href={link.href} key={link.name}>
                <a className={styles.aside__navLink}> {link.name}</a>
              </Link>
            );
          })}
          <Link href={navbar.button.href} key={navbar.button.name}>
            <a className={styles.aside__navLink}> {navbar.button.name}</a>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
