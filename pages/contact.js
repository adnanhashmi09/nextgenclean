// Utils
import Image from 'next/image';
// Components
import Navbar from '../components/Navbar';
import Meta from '../components/utils/Meta';
import Footer from '../components/Footer';
import { BlobsOther } from '../components/utils/blobs/Blobs';
import ContactInformation from '../components/ContactInformation';
import ContactForm from '../components/ContactForm';
// Data
import data from '../content/data.json';
// Styles
import blobStyles from '../styles/components/blobs.module.scss';
// Loading
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

const metaData = {
  title: 'Contact',
  description: 'Next Gen Greens Contact Page',
};

export default function SolidServices() {
  const contact = data.pages.contact;
  const { container, wrapper } = blobStyles;

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
            <BlobsOther />

            <main>
              <Navbar />
              <ContactInformation data={contact} />
              <ContactForm data={contact} />
            </main>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
