import { useAuth0 } from '@auth0/auth0-react';

const LogoutBtn = () => {
	const { logout } = useAuth0();

	return (
		<div>
			<button
				onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
			>
				Log out
			</button>
		</div>
	);
};

export default LogoutBtn;
