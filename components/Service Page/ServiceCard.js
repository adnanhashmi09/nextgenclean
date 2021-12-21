import styles from '../../styles/components/services.module.scss';

const ServiceCard = ({ service, clickHandler }) => {
  const { page_card } = styles;
  const { title, image, description } = service.fields;

  return (
    <a
      className={page_card}
      onClick={clickHandler}
      data-title={title}
      data-img={image.fields.file.url}
      data-caption={description}
    >
      <div>
        <img src={image.fields.file.url} alt={title} />
      </div>
      <h3>{title}</h3>
    </a>
  );
};

export default ServiceCard;
