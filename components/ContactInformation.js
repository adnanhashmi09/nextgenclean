// nextjs imports
import Link from 'next/link';

//Styles
import styles from '../styles/components/contact.module.scss';

//Icons
import { IoLocationSharp } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';
import { IoMail } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoTwitter } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';

function ContactInformation({ data }) {
  return (
    <div>
      <div className={styles.page_heading}>
        <h2>{data.title}</h2>
        <h3>{data.caption}</h3>
      </div>
      <div className={styles.contactInformation}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.777523508243!2d77.2412641513031!3d28.54640608236562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35b1471508d%3A0x52db40c91e75940c!2sPOLICE%20STATION%20GREATER%20KAILASH%20PART-1!5e0!3m2!1sen!2sin!4v1636909583908!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.info}>
            <IoCall className={styles.icon} />
            <p>{data.details.phone}</p>
          </div>
          <div className={styles.info}>
            <IoMail className={styles.icon} />
            <p>{data.details.email}</p>
          </div>
          <div className={styles.info}>
            <IoLocationSharp className={styles.icon} />
            <p>
              {data.details.address.map((line, index) => (
                <span key={`line_${index}`}>
                  {line} <br />
                </span>
              ))}
            </p>
          </div>
          <div className={`${styles.info} ${styles.socialsBox}`}>
            <Link href={data.socials.facebook}>
              <a>
                <IoLogoFacebook
                  className={`${styles.social} ${styles.facebook}`}
                />
              </a>
            </Link>
            <Link href={data.socials.instagram}>
              <a>
                <IoLogoInstagram
                  className={`${styles.social} ${styles.instagram}`}
                />
              </a>
            </Link>
            <Link href={data.socials.twitter}>
              <a>
                <IoLogoTwitter
                  className={`${styles.social} ${styles.twitter}`}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
