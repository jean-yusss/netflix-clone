import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { getProducts } from '@stripe/firestore-stripe-payments';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Modal from '../components/Modal/Modal';
import Row from '../components/Row/Row';
import Plans from '../components/Plans/Plans';

import payments from '../lib/stripe';
import requests from '../utils/requests';
import { modalState } from '../atoms/modalAtom';
import useList from '../hooks/useList';
import useAuth from '../hooks/useAuth';
import useSubscription from '../hooks/useSubscription';

import {
	HomePageContainer,
	MainContainer,
	SectionContainer
} from '../styles/HomePageStyles';

const HomePage = props => {
	const { loading, user } = useAuth();
	const list = useList(user?.uid);
	const subscription = useSubscription(user);

	const showModal = useRecoilValue(modalState);

	if (loading || subscription === null) return null;

	if (!subscription) return <Plans plans={props.plans} />;

	return (
		<HomePageContainer>
			<Head>
				<title>Home - Netflix</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<MainContainer>
				<Banner netflixOriginals={props.netflixOriginals} />

				<SectionContainer>
					{list.length > 0 && <Row title='My List' movies={list} />}
					<Row title='Trending Now' movies={props.trendingNow} />
					<Row title='Top Rated' movies={props.topRated} />
					<Row title='Action Thrillers' movies={props.actionMovies} />
					<Row title='Comedies' movies={props.comedyMovies} />
					<Row title='Scary Movies' movies={props.horrorMovies} />
					<Row title='Romance Movies' movies={props.romanceMovies} />
					<Row title='Documentaries' movies={props.documentaries} />
				</SectionContainer>
			</MainContainer>

			{showModal && <Modal />}
		</HomePageContainer>
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
