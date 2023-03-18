import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import LoginBtn from '../LoginBtn/LoginBtn';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import Spline from '@splinetool/react-spline';

export default function Navbar() {
	const { user, isAuthenticated } = useAuth0();

	// console.log(user);

	return (
		<div className='flex flex-col justify-center text-[#4c5259] pb-2'>
			{/* <img className=' h-22 ml-40  ' src={logo} alt='logo' /> */}
			<div className=' h-12 overflow-hidden'>
				<Link to='/'>
					<Spline
						className=' scale-150 mt-2'
						scene='https://prod.spline.design/ffORQphusIoT5k1H/scene.splinecode'
					/>
				</Link>
			</div>
			<br />
			<div className='flex border-y-2 border-[#4c5259] border-opacity-20 w-[90%] mx-[5%] justify-center py-1 -mt-4'>
				<div className='flex row-auto gap-12 py-3'>
					<Link to='/home'>Inicio</Link>

					<Link to='/nosotros'>Nosotros</Link>

					<Link to='/calendario'>Calendario</Link>

					<Link to='/blog'>Blog</Link>

					<Link to='/planes'>Planes</Link>

					{!isAuthenticated && <LoginBtn />}

					{isAuthenticated && (
						<div>
							<img
								className=' rounded-full max-w-[40px]'
								src={user.picture}
								alt={user.name}
							/>

							<Link to='/perfil'>Perfil</Link>

							<LogoutBtn />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
