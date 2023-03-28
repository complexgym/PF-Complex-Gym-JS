import { useAuth0 } from '@auth0/auth0-react';
import style from "./style.module.css"

const LoginBtn = () => {
	const { loginWithRedirect } = useAuth0();


	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: "/home",
			},
		})
	};


	return (
		<div className={style.login}>
			<button onClick={() => handleLogin()}>Ingresar</button>
		</div>
	);
};

export default LoginBtn;
