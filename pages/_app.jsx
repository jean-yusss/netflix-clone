import { RecoilRoot } from 'recoil';

import GlobalStyles from '../components/GlobalStyles';

import { AuthProvider } from '../hooks/useAuth';

const App = ({ Component, pageProps }) => (
	<RecoilRoot>
		<AuthProvider>
			<GlobalStyles />
			<Component {...pageProps} />
		</AuthProvider>
	</RecoilRoot>
);

export default App;
