import styles from '../../styles/components/blog.module.scss';
import Link from 'next/link';

const BlogCard = ({ post }) => {
  const { card } = styles;
  const { slug, featuredImage, title, excerpt } = post.fields;

  return (
    <Link href={'/blog/' + slug}>
      <a className={card}>
        <div>
          <img src={featuredImage.fields.file.url} alt={slug} />
        </div>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <a href={'/blog/' + slug}>Read More</a>
      </a>
    </Link>
  );
};

export default BlogCard;
