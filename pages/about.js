// Utils

// Components
import Navbar from '../components/Navbar';
import Meta from '../components/utils/Meta';
import Footer from '../components/Footer';
import { BlobsAbout } from '../components/utils/blobs/Blobs';
import Header from '../components/About page/Header';
import Description from '../components/About page/Description';
import Projects from '../components/About page/Projects';
import Vision from '../components/About page/Vision';
import ClientsBanner from '../components/ClientsBanner';
import Awards from '../components/About page/Awards';
// Data
import data from '../content/data.json';
// Styles
import blobStyles from '../styles/components/blobs.module.scss';
// Loading
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
// CMS
import { createClient } from 'contentful';

const metaData = {
  title: 'About',
  description: 'Next Gen Greens About Page',
};

// Fetch Clients
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'client' });
  const res1 = await client.getEntries({ content_type: 'project' });

  let ongoing_projects = [],
    completed_projects = [];

  res1.items.map(el => {
    if (el.fields.type) ongoing_projects.push(el);
    else completed_projects.push(el);
  });

  ongoing_projects.reverse();
  completed_projects.reverse();

  ongoing_projects.map((el, idx) => {
    ongoing_projects[idx].id = idx + 1;
  });

  completed_projects.map((el, idx) => {
    completed_projects[idx].id = idx + 1;
  });

  return {
    props: {
      clients: res.items,
      ongoing_projects: ongoing_projects,
      completed_projects: completed_projects,
    },
    revalidate: 1,
  };
}

export default function SolidServices({
  clients,
  ongoing_projects,
  completed_projects,
}) {
  const [showLoading, setShowLoading] = useState(true);
  const { container, wrapper } = blobStyles;
  const { about } = data.pages;

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
            <BlobsAbout />

            <main>
              <Navbar />
              <Header data={about} />
              <Description data={about} />
            </main>
            <Vision data={about.vision} />
            <main>
              <Awards data={about.awards} />
              <ClientsBanner clients={clients} />
            </main>
            <Projects data={ongoing_projects} type="Ongoing Projects" />
            <Projects data={completed_projects} type="Key Completed Projects" />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
