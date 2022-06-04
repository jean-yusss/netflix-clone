import 'twin.macro';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div tw='text-red-500 bg-black text-center'>Netflix Clone</div>
    </div>
  );
};

export default HomePage;
