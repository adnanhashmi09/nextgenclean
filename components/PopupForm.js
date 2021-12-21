import styles from '../styles/components/popup.module.scss';
import { IoMdClose } from 'react-icons/io';

//components
import ContactForm from './ContactForm';

function PopupForm({ closePopup }) {
  return (
    <>
      <div className={styles.popupForm}>
        <a onClick={closePopup} className={styles.cross}>
          <IoMdClose className={styles.icon} />
        </a>
        <ContactForm cls="popupForm" data={{ formCaption: 'Take a Pledge' }} />
      </div>
    </>
  );
}

export default PopupForm;
