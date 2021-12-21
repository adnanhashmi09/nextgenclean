// Components
import Navbar from '../components/Navbar';
import Meta from '../components/utils/Meta';
import Footer from '../components/Footer';
// Styles
import blobStyles from '../styles/components/blobs.module.scss';
// Loading
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import BlogPosts from '../components/BlogPosts';
// CMS
import { createClient } from 'contentful';

const metaData = {
  title: 'Blog',
  description: 'Next Gen Greens Blog Description',
};

// Fetch Posts
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'blogpost' });

  return {
    props: {
      posts: res.items,
    },
    revalidate: 1,
  };
}

export default function BlogPage({ posts }) {
  const { container, wrapper } = blobStyles;

  console.log(posts);

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <Meta {...metaData} />
      {showLoading && <Loader />}
      {!showLoading && (
        <div className={wrapper}>
          <div className={container}>
            {/* <Blobs /> */}
            <main>
              <Navbar />
              <BlogPosts posts={posts} />
            </main>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
