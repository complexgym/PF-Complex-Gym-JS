import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllClients, getClientDetail } from '../../redux/actions/actions';

export default function Profile() {
	const dispatch = useDispatch();

	const { user } = useAuth0();

	const allClient = useSelector((state) => state.allClients);

	// console.log(allClient);

	let matchEmail = user && allClient.find((m) => m.mail === user.email);

	const matchId = matchEmail && matchEmail.id;

	useEffect(() => {
		dispatch(getAllClients());
		dispatch(getClientDetail(matchId));
	}, []);

	return (
		<div className='grid grid-cols-2'>
			<div className=''>
				<div>
					<div>
						<img src={user.picture} alt={user.name} />
						<h1>{user.name}</h1>
						<h2>{user.email}</h2>
					</div>
					<br />
					<div>
						<Link>
							<button>Editar info</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
