import GlobalStyles from '../components/GlobalStyles';

import { AuthProvider } from '../hooks/useAuth';

const App = ({ Component, pageProps }) => (
  <AuthProvider>
    <GlobalStyles />
    <Component {...pageProps} />
  </AuthProvider>
);

export default App;
