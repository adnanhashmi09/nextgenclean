// Components
import Navbar from '../../components/Navbar';
import Meta from '../../components/utils/Meta';
import Footer from '../../components/Footer';
// Styles
import blobStyles from '../../styles/components/blobs.module.scss';
import BlogContainer from '../../components/BlogContainer';
import BackButton from '../../components/utils/BackButton';
// CMS
import { createClient } from 'contentful';

const metaData = {
  title: 'Post',
  description: 'Next Gen Greens Blog Post Excerpt',
};

// Fetch posts
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blogpost',
  });

  const paths = res.items.map(item => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blogpost',
    'fields.slug': params.slug,
  });

  if (items.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: items[0],
    },
    revalidate: 1,
  };
};

export default function BlogPage({ post }) {
  const { container } = blobStyles;
  if (!post) return <h3>Loading...</h3>;

  return (
    <>
      <Meta {...metaData} />

      <div className={container}>
        {/* <Blobs /> */}
        <main>
          <Navbar />
          <BackButton />
          <BlogContainer post={post} />
        </main>
      </div>
      <Footer />
    </>
  );
}
