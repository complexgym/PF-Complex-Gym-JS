import { useAuth0 } from '@auth0/auth0-react';

const LoginBtn = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<div>
			<button
				onClick={() =>
					loginWithRedirect({ redirect_uri: 'http://localhost:5173/registro' })
				}
			>
				Ingresar
			</button>
		</div>
	);
};

export default LoginBtn;
