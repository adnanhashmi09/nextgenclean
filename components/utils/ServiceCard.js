import styles from '../../styles/components/services.module.scss';

const ServiceCard = ({ service }) => {
  const { card } = styles;
  const { title, image } = service.fields;

  return (
    <div className={card}>
      <div>
        <img src={image.fields.file.url} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default ServiceCard;
