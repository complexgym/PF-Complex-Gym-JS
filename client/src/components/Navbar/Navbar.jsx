import { NavLink } from 'react-router-dom';
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

	const isActive = matchEmail && matchEmail.active;

	const matchId = matchEmail && matchEmail.id;

	useEffect(() => {
		dispatch(getAllClients());
		dispatch(getClientDetail(matchId));
	}, []);

	const isActiveStyle = ({isActive})=>isActive ? "font-bold underline" : ""

	return (
		<div className=' fixed z-20 flex flex-row w-screen text-white py-2 bg-[#231f20] bg-opacity-80 items-center'>
			<div className='flex flex-row font-text w-[90%] mx-[5%] text-white pb-2 items-center border-y-2 border-white border-opacity-20'>
				<div className=''>
					{/* <Link to='/'>
						<Spline scene='https://prod.spline.design/ffORQphusIoT5k1H/scene.splinecode' />
					</Link> */}
					<NavLink to='/'>
						<img className='w-[10%] ml-[10%] -mb-2 ' src={logo} alt='logo' />
					</NavLink>
				</div>
				<br />
				<div className='flex  w-screen mr-[5%] justify-end '>
					<div className='flex  gap-12 items-center'>
						<NavLink to='/home' className={isActiveStyle}>Inicio</NavLink>

						<NavLink to='/nosotros' className={isActiveStyle}>Nosotros</NavLink>

						<NavLink to='/calendario' className={isActiveStyle}>Calendario</NavLink>

						<NavLink to='/blog' className={isActiveStyle}>Blog</NavLink>

						<NavLink to='/planes' className={isActiveStyle}>Planes</NavLink>

						{!isAuthenticated && <LoginBtn />}

						{isActive && <NavLink to={`/perfil/${matchId}`}>Perfil</NavLink>}
						{isActive && <NavLink to={'/dashboard'}>Dashboard</NavLink>}
						{isActive ? null : <NavLink to={'/registro'} className={isActiveStyle}>registro</NavLink>}
						{isAuthenticated && <LogoutBtn />}
					</div>
				</div>
			</div>
		</div>
	);
}
