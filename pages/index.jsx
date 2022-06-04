import 'twin.macro';
import Head from 'next/head';

import Header from '../components/Header/Header';

const HomePage = () => {
  return (
    <div tw='relative h-screen bg-gradient-to-b lg:h-[140vh]'>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
    </div>
  );
};

export default HomePage;
