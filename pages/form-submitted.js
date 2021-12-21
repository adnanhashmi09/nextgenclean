//utils
import Router from 'next/router';
// Components
import Navbar from '../components/Navbar';
import Meta from '../components/utils/Meta';
import Footer from '../components/Footer';
import Blobs from '../components/utils/blobs/Blobs';
// Data
import data from '../content/data.json';
// Styles
import blobStyles from '../styles/components/blobs.module.scss';
import styles from '../styles/components/formSubmitted.module.scss';
// Loading
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

//lottie imports

import { Player } from '@lottiefiles/react-lottie-player';

const metaData = {
  title: 'Success',
  description: 'Next Gen Greens Success Page',
};

export default function FormSubmitted() {
  const { container } = blobStyles;

  const [showLoading, setShowLoading] = useState(true);
  const [timer, setTimer] = useState(4);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let redirectInterval = setInterval(() => {
        if (timer !== 1) {
          setTimer(timer => timer - 1);
        }
      }, 1000);

      setTimeout(() => {
        clearInterval(redirectInterval);
        Router.push('/');
      }, 3000);
    }, 1700);
  }, []);

  return (
    <>
      <Meta {...metaData} />
      {showLoading && <Loader />}
      {!showLoading && (
        <>
          <div className={container}>
            {/* <Blobs /> */}

            <main>
              {/* <Navbar /> */}
              <section className={styles.heading}>
                <h1>Your response has been submitted</h1>
              </section>
              <ConfirmLoader />
              <p className={styles.redirect}>
                Redirecting you to the homepage in {timer}...
              </p>
            </main>
          </div>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}

function ConfirmLoader() {
  return (
    <div id="loading_animation" className={styles.loader}>
      <Player
        autoplay
        loop
        speed={2.2}
        src="./confirmLoader.json"
        style={{ width: '100%', margin: '0rem auto' }}
      ></Player>
    </div>
  );
}
