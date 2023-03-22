import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginBtn from '../LoginBtn/LoginBtn';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
// import Spline from '@splinetool/react-spline';
import logo from '../../assets/logo/logo.png';
import { getAllClients, getClientDetail } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Navbar() {
	const dispatch = useDispatch();

	const { user, isAuthenticated } = useAuth0();

	const allClient = useSelector((state) => state.allClients);

	let matchEmail = user && allClient.find((m) => m.mail === user.email);

	const active = matchEmail && matchEmail.active;

	const matchId = matchEmail && matchEmail.id;

	// console.log(active);

	useEffect(() => {
		dispatch(getAllClients());
		dispatch(getClientDetail(matchId));
	}, []);

	return (
		<div className=' fixed z-20 flex flex-row w-screen text-white py-2 bg-[#231f20] bg-opacity-80 items-center'>
			<div className='flex flex-row font-text w-[90%] mx-[5%] text-white pb-2 items-center border-y-2 border-white border-opacity-20'>
				<div className=''>
					{/* <Link to='/'>
						<Spline scene='https://prod.spline.design/ffORQphusIoT5k1H/scene.splinecode' />
					</Link> */}
					<Link to='/'>
						<img className='w-[10%] ml-[10%] -mb-2 ' src={logo} alt='logo' />
					</Link>
				</div>
				<br />
				<div className='flex  w-screen mr-[5%] justify-end '>
					<div className='flex  gap-12 items-center'>
						<Link to='/home'>Inicio</Link>

						<Link to='/nosotros'>Nosotros</Link>

						<Link to='/calendario'>Calendario</Link>

						<Link to='/blog'>Blog</Link>

						<Link to='/planes'>Planes</Link>

						{!isAuthenticated && <LoginBtn />}

						{isAuthenticated && <Link to={`/perfil/${matchId}`}>Perfil</Link>}
						{isAuthenticated && active ? null : <Link to={'/registro'}>registro</Link>}
						{isAuthenticated && <LogoutBtn />}
					</div>
				</div>
			</div>
		</div>
	);
}
