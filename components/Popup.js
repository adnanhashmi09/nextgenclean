import styles from '../styles/components/popup.module.scss';
import { IoMdClose } from 'react-icons/io';

function Popup({ data, closePopup }) {
  return (
    <>
      <div className={styles.popup}>
        <a onClick={closePopup} className={styles.cross}>
          <IoMdClose className={styles.icon} />
        </a>
        <div className={styles.img}>
          <img src={data.img} />
        </div>
        <div className={styles.content}>
          <h2>{data.title}</h2>
          <p>{data.caption}</p>
        </div>
      </div>
    </>
  );
}

export default Popup;
