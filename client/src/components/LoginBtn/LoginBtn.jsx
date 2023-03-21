import { useAuth0 } from '@auth0/auth0-react';

const LoginBtn = () => {
	const { loginWithRedirect } = useAuth0();

	console.log(localStorage.getItem("user"));

	return (
		<div>
			<button onClick={() => loginWithRedirect()}>Ingresar</button>
		</div>
	);
};

export default LoginBtn;
