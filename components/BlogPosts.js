import styles from '../styles/components/blog.module.scss';
import BlogCard from './utils/BlogCard';

const BlogPosts = ({ posts }) => {
  const { postsSection, postsContainer, newHeading } = styles;
  const header = {
    title: 'Blog',
    caption: 'Recent Posts',
  };

  return (
    <section className={postsSection}>
      <div className={newHeading}>
        <h2>Blog</h2>
        <h3>Recent Posts</h3>
      </div>
      <div className={postsContainer}>
        {posts && posts.map((post, i) => <BlogCard post={post} key={i} />)}
      </div>
    </section>
  );
};

export default BlogPosts;
