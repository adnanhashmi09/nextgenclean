//styles
import styles from '../../styles/components/awards.module.scss';

function Awards({ data }) {
  return (
    <section>
      <div className={styles.heading}>
        <h2>Awards</h2>
      </div>
      <div className={styles.line1}>
        <div className={styles.card}>
          <div className={styles.img}>
            <img src={data[0].img} alt="awards img" />
          </div>
          <p>{data[0].caption}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.img}>
            <img src={data[1].img} alt="awards img" />
          </div>
          <p>{data[1].caption}</p>
        </div>
      </div>
      <div className={styles.line2}>
        <h3>{data[2].title}</h3>
        <div className={styles.img}>
          <img src={data[2].img} alt="awards img" />
        </div>
        <div className={styles.awardMoney}>
          <p>{data[2].name}</p>
          <p>{data[2].money}</p>
        </div>
        <p>{data[2].caption}</p>
        <a target="_blank" href={data[2].link} rel="noopener noreferrer">
          <p>{data[2].link}</p>
        </a>
      </div>
    </section>
  );
}

export default Awards;
