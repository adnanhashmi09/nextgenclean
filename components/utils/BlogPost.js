import styles from '../../styles/components/post.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogPost = ({ content }) => {
  const { blogpost, post, meta } = styles;
  const { title, featuredImage, postContent } = content.fields;

  return (
    <div className={blogpost}>
      <div className={meta}>
        <h1>{title}</h1>
        <img src={featuredImage.fields.file.url} alt={title} />
      </div>

      <div className={post}>{documentToReactComponents(postContent)}</div>
    </div>
  );
};

export default BlogPost;
