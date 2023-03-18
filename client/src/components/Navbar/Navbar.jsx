import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginBtn from '../LoginBtn/LoginBtn';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import Spline from '@splinetool/react-spline';

export default function Navbar() {
	const { user, isAuthenticated } = useAuth0();

	// console.log(user);

	return (
		<div className=' fixed z-20 flex flex-row w-screen text-white py-2 bg-[#231f20] bg-opacity-80 items-center'>
			<div className='flex flex-row w-[90%] mx-[5%] text-white pb-2 items-center border-y-2 border-white border-opacity-20'>
				<div className=' h-16 pl-[10%] justify-center'>
					<Link to='/'>
						<Spline scene='https://prod.spline.design/ffORQphusIoT5k1H/scene.splinecode' />
					</Link>
				</div>
				<br />
				<div className='flex  w-screen mx-[5%] justify-end py-1 '>
					<div className='flex  gap-12 py-3'>
						<Link to='/home'>Inicio</Link>

						<Link to='/nosotros'>Nosotros</Link>

						<Link to='/calendario'>Calendario</Link>

						<Link to='/blog'>Blog</Link>

						<Link to='/planes'>Planes</Link>

						{!isAuthenticated && <LoginBtn />}

						{isAuthenticated && <Link to='/perfil'>Perfil</Link>}
						{isAuthenticated && <LogoutBtn />}
					</div>
				</div>
			</div>
		</div>
	);
}
