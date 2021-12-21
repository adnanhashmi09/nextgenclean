import styles from '../../styles/components/vision.module.scss';

function Vision({ data }) {
  return (
    <section className={styles.vision}>
      <img src="/waves.png" className={styles.vision__waves} />
      <img src="/waves.png" className={styles.vision__waves} />
      <div className={styles.img}>
        <img src={data.image.src} alt={data.image.alt} />
      </div>
      <div>
        <h1>{data.title}</h1>
        <h3>{data.caption}</h3>
        <p>{data.text}</p>
      </div>
    </section>
  );
}

export default Vision;
