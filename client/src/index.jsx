import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './redux/store/store';

window.addEventListener('blur', () => {
	document.title = '¡Quédate, falta una repe! 🏋🏼‍♂️';
});

window.addEventListener('focus', () => {
	document.title = 'COMPLEX GYM';
});

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Auth0Provider
					domain={domain}
					clientId={clientId}
					authorizationParams={{
						redirect_uri: window.location.origin,
					}}
					useRefreshTokens={ true }
      		cacheLocation="localstorage" 
				>                
					<App />
				</Auth0Provider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
