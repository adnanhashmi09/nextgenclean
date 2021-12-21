import styles from '../../styles/components/about.module.scss';

function Header({ data }) {
  return (
    <div className={styles.header}>
      <h2>{data.title}</h2>
      <h3>{data.caption}</h3>
      <p>{data['sub-caption']}</p>
    </div>
  );
}

export default Header;
