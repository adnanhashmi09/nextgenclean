import styles from '../../styles/components/about.module.scss';

function Description({ data }) {
  const { desc } = data;

  return (
    <div className={styles.descBox}>
      <div className={styles.desc}>
        <div className={styles.desc__img}>
          <img src={desc[0].img} alt="about description image" />
        </div>
        <div className={styles.desc__text}>
          <p>{desc[0].text}</p>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.desc__img}>
          <img src={desc[1].img} alt="about description image" />
        </div>
        <div className={styles.desc__text}>
          <p>{desc[1].text}</p>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.desc__img}>
          <img src={desc[2].img} alt="about description image" />
        </div>
        <div className={styles.desc__text}>
          <p>{desc[2].text}</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
