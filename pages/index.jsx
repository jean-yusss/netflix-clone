import 'twin.macro';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { getProducts } from '@stripe/firestore-stripe-payments';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Modal from '../components/Modal/Modal';
import Row from '../components/Row/Row';
import Plans from '../components/Plans/Plans';

import requests from '../utils/requests';
import useAuth from '../hooks/useAuth';
import useSubscription from '../hooks/useSubscription';
import { modalState } from '../atoms/modalAtom';
import payments from '../lib/stripe';
import useList from '../hooks/useList';

const HomePage = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
  plans
}) => {
  const showModal = useRecoilValue(modalState);
  const { loading, user } = useAuth();
  const subscription = useSubscription(user);
  const list = useList(user?.uid);

  if (loading || subscription === null) return null;

  if (!subscription) return <Plans plans={plans} />;

  return (
    <div tw='relative h-screen bg-gradient-to-b lg:h-[140vh]'>
      <Head>
        <title>Home - Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main tw='relative pl-8 pb-24 lg:space-y-24 lg:pl-12'>
        <Banner netflixOriginals={netflixOriginals} />

        <section tw='md:space-y-12'>
          {list.length > 0 && <Row title='My List' movies={list} />}
          <Row title='Trending Now' movies={trendingNow} />
          <Row title='Top Rated' movies={topRated} />
          <Row title='Action Thrillers' movies={actionMovies} />
          <Row title='Comedies' movies={comedyMovies} />
          <Row title='Scary Movies' movies={horrorMovies} />
          <Row title='Romance Movies' movies={romanceMovies} />
          <Row title='Documentaries' movies={documentaries} />
        </section>
      </main>

      {showModal && <Modal />}
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then(res => res.json()),
    fetch(requests.fetchTrending).then(res => res.json()),
    fetch(requests.fetchTopRated).then(res => res.json()),
    fetch(requests.fetchActionMovies).then(res => res.json()),
    fetch(requests.fetchComedyMovies).then(res => res.json()),
    fetch(requests.fetchHorrorMovies).then(res => res.json()),
    fetch(requests.fetchRomanceMovies).then(res => res.json()),
    fetch(requests.fetchDocumentaries).then(res => res.json())
  ]);

  const plans = await getProducts(payments, {
    includePrices: true,
    activeOnly: true
  })
    .then(res => res)
    .catch(err => console.error(err.message));

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      plans
    }
  };
};
