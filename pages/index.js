// Utils
import Hero from '../components/Hero';
// Components
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Meta from '../components/utils/Meta';
import Footer from '../components/Footer';
import About from '../components/About';
import Cta from '../components/Cta';
import BlogSection from '../components/BlogSection';
import Blobs from '../components/utils/blobs/Blobs';
import ClientsBanner from '../components/ClientsBanner';
import PopupForm from '../components/PopupForm';
// Data
import data from '../content/data.json';
// Styles
import blobStyles from '../styles/components/blobs.module.scss';
import { overlay } from '../styles/components/popup.module.scss';
// Loading
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
// CMS
import { createClient } from 'contentful';

const metaData = {
  title: 'Home',
  description: 'Next Gen Greens Description',
};

// Fetch Posts
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'blogpost' });
  const res1 = await client.getEntries({ content_type: 'service' });
  const res2 = await client.getEntries({ content_type: 'client' });

  return {
    props: {
      posts: res.items.slice(0, 3),
      services: res1.items,
      clients: res2.items,
    },
    revalidate: 1,
  };
}

export default function Home({ posts, services, clients }) {
  const { header } = data.pages.home;
  const { container, wrapper } = blobStyles;

  const [showLoading, setShowLoading] = useState(true);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 1500);
  }, []);

  const closePopup = e => {
    setPopup(false);
  };

  const openPopup = e => {
    setPopup(true);
  };

  return (
    <>
      <Meta {...metaData} />
      {showLoading && <Loader />}
      {!showLoading && (
        <div className={wrapper}>
          {popup ? <div className={overlay} onClick={closePopup} /> : null}

          <div className={container}>
            <Blobs />
            <main>
              <Navbar />
              <Hero {...header} />
              <About />
              <Services services={services} />
              {popup ? <PopupForm closePopup={closePopup} /> : null}
            </main>
            <ClientsBanner clients={clients} />
            <Cta openPopup={openPopup} />
            <main>
              <BlogSection blogs={posts} />
            </main>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
