import styles from '../../styles/components/services.module.scss';
import ServiceCard from './ServiceCard';

function Services({ data, clickHandler, title }) {
  return (
    <div>
      <div className={styles.page_heading}>
        <h2 style={{ fontWeight: '700' }}>Services and solutions</h2>
        <h3>{title}</h3>
      </div>
      <div className={styles.container}>
        {data.map((el, index) => (
          <ServiceCard
            clickHandler={clickHandler}
            service={el}
            key={`service_${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
