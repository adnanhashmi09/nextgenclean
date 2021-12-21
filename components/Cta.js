import styles from '../styles/components/cta.module.scss';
import data from '../content/data.json';
import Button from './utils/Button';

import buttonStyle from '../styles/components/button.module.scss';

function Cta({ openPopup }) {
  const { cta } = data.pages.home;
  return (
    <section className={styles.cta}>
      <img src="/waves.png" className={styles.cta__waves} />
      <img src="/waves.png" className={styles.cta__waves} />
      <div className={styles.img}>
        <img src={cta.image.src} alt={cta.image.alt} />
      </div>
      <div>
        <h1>{cta.title}</h1>
        <button onClick={openPopup} className={buttonStyle.btn}>
          {cta.button.name}
        </button>
      </div>
    </section>
  );
}

export default Cta;
