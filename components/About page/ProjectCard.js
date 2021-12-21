import styles from '../../styles/components/projects.module.scss';

function ProjectCard({ projectGrp }) {
  return (
    <div className={styles.cardGrp}>
      {projectGrp.map(project => {
        return (
          <div
            className={styles.card}
            key={`project_${project.fields.subtitle}`}
          >
            <span>{project.id}</span>
            <div className={styles.content}>
              <h4>{project.fields.title}</h4>
              <p>{project.fields.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCard;
