import { useAuth0 } from '@auth0/auth0-react';
import style from "./style.module.css"

const LoginBtn = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<div className={style.login}>
			<button onClick={() => loginWithRedirect()}>Ingresar</button>
		</div>
	);
};

export default LoginBtn;
