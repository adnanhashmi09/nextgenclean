// Utils
import Image from 'next/image';
// Components
import Navbar from '../components/Navbar';
import Meta from '../components/utils/Meta';
import Footer from '../components/Footer';
import { BlobsOther } from '../components/utils/blobs/Blobs';
import Services from '../components/Service Page/Services';
import Popup from '../components/Popup';
// Data
import data from '../content/data.json';
// Styles
import blobStyles from '../styles/components/blobs.module.scss';
import { overlay } from '../styles/components/popup.module.scss';
// Loading
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import CaseStudy from '../components/CaseStudy';
// CMS
import { createClient } from 'contentful';

const metaData = {
  title: 'Solid Based Services',
  description: 'Next Gen Greens Services Description',
};

const caseStudy = {
  title: 'Hauz Khas Lake',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatibus exercitationem facere asperiores aliquid vitae porro nam ut incidunt, perspiciatis cumque doloremque, similique magnam iusto molestiae officiis possimus, minus consequuntur! Quidem nulla animi facere exercitationem dolore aut reiciendis dolores! Molestias.',
};

// Fetch Services
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: 'service',
    'fields.type': false,
  });

  return {
    props: {
      services: res.items,
    },
    revalidate: 1,
  };
}

export default function SolidServices({ services }) {
  const { container, wrapper } = blobStyles;

  const [showLoading, setShowLoading] = useState(true);
  const [popup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    title: '',
    img: '',
    caption: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 1500);
  }, []);

  const clickHandler = e => {
    const { title, img, caption } = e.currentTarget.dataset;
    setPopup(true);
    setPopupData({
      title: e.currentTarget.dataset.title,
      img: img,
      caption: caption,
    });
  };

  const closePopup = e => {
    setPopup(false);
  };

  return (
    <>
      <Meta {...metaData} />
      {showLoading && <Loader />}
      {!showLoading && (
        <div className={wrapper}>
          {popup ? <div className={overlay} onClick={closePopup} /> : null}

          <div className={container}>
            <BlobsOther />

            <main>
              <Navbar />
              <Services
                clickHandler={clickHandler}
                data={services}
                title={'Solid Based Services'}
              />
              {popup ? (
                <Popup closePopup={closePopup} data={popupData} />
              ) : null}
            </main>
            <CaseStudy content={caseStudy} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
