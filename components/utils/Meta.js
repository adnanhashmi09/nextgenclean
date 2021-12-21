import Head from 'next/head';

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>NextGenGreens | {title} </title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
