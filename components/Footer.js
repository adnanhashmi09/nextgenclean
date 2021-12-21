import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/footer.module.scss';
import data from '../content/data.json';

function Footer() {
  const { footer } = data;
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__linksContainer}>
        {footer.links.map(link => (
          <Link href={link.href} key={link.name}>
            <a className={styles.footer__links}> {link.name}</a>
          </Link>
        ))}
      </div>
      <a href={'mailto:' + footer.email} className={styles.footer__email}>
        <FontAwesomeIcon
          className={styles.footer__iconsEmail}
          icon={faEnvelope}
        />
        {footer.email}
      </a>
      {/* <div className={styles.footer__socials}>
        <Link href={footer.socials.facebook}>
          <a>
            <FontAwesomeIcon
              className={styles.footer__icons}
              icon={faFacebookF}
            />
          </a>
        </Link>
        <Link href={footer.socials.instagram}>
          <a>
            <FontAwesomeIcon
              className={styles.footer__icons}
              icon={faInstagram}
            />
          </a>
        </Link>
        <Link href={footer.socials.instagram}>
          <a>
            <FontAwesomeIcon
              className={styles.footer__icons}
              icon={faTwitter}
            />
          </a>
        </Link>
      </div> */}
      <p className={styles.footer__copyright}>{footer.copyright}</p>
    </footer>
  );
}

export default Footer;
