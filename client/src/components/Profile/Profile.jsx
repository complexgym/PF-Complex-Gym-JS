import Form from '../Form/Form';
import { useAuth0 } from '@auth0/auth0-react';
import ClientDetail from '../ClientDetail/ClientDetail';

export default function Profile() {
	const { user, isAuthenticated } = useAuth0();
	return (
		<div className=' grid grid-cols-2 col-span-6 sm:col-span-3'>
			<div className=''>
				<ClientDetail />
			</div>

			<div className=''>{isAuthenticated && <Form />}</div>
		</div>
	);
}
