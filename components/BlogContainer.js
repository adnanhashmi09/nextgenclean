import BlogPost from './utils/BlogPost';
import styles from '../styles/components/blog.module.scss';

const BlogContainer = ({ post }) => {
  const { blogContainerMain } = styles;
  return (
    <div className={blogContainerMain}>
      <BlogPost content={post} />
    </div>
  );
};

export default BlogContainer;
