import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

window.addEventListener('blur', () => {
	document.title = '¡No te vayas gordito! 🏋🏼‍♂️';
});

window.addEventListener('focus', () => {
	document.title = 'COMPLEX GYM';
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Auth0Provider
				domain='dev-o2lihq5f3ltnq4we.us.auth0.com'
				clientId='Hzhyp48SllnDorLA7hv50kNPAf9CWsPv'
				authorizationParams={{
					redirect_uri: window.location.origin,
				}}
			>
				<App />
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>
);
