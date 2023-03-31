import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginBtn from '../LoginBtn/LoginBtn';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { getAllClients, getClientDetail } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import icono_menu from '../../assets/img/icono-menu.png';

export default function Navbar() {
	const dispatch = useDispatch();

	const { user, isAuthenticated } = useAuth0();

	const allClient = useSelector((state) => state.allClients);

	let matchEmail = user && allClient.find((m) => m.mail === user.email);

	const isActive = matchEmail && matchEmail.active;

	const isAdmin = matchEmail && matchEmail.admin;

	const matchId = matchEmail && matchEmail.id;

	const [open, setOpen] = useState(true);

	useEffect(() => {
		dispatch(getAllClients());
		dispatch(getClientDetail(matchId));
	}, []);

	const isActiveStyle = ({ isActive }) =>
		isActive ? 'font-bold underline text-[#1D459D]' : '';

	return (
		<div>
			<div className='hidden 2xl:flex xl:flex lg:flex  flex-row w-screen text-[#cbcaca]  bg-[#07070A] items-center h-24  '>
				<div className=''>
					<NavLink to='/'>
						<div className='w-10'>
							<Spline
								className='scale-[.23]'
								scene='https://prod.spline.design/MxBpL47FBda9L3Lp/scene.splinecode'
							/>
						</div>
					</NavLink>
				</div>
				<br />
				<div className='flex w-screen mr-[5%] justify-end '>
					<div className='flex  gap-12 items-center'>
						<NavLink to='/home' className={isActiveStyle}>
							Inicio
						</NavLink>

						<NavLink to='/nosotros' className={isActiveStyle}>
							Nosotros
						</NavLink>

						<NavLink to='/calendario' className={isActiveStyle}>
							Calendario
						</NavLink>

						<NavLink to='/blog' className={isActiveStyle}>
							Blog
						</NavLink>

						<NavLink to='/planes' className={isActiveStyle}>
							Planes
						</NavLink>

						{!isAuthenticated && <LoginBtn />}

						{isActive && <NavLink to={`/perfil/${matchId}`}>Perfil</NavLink>}
						{!!isAdmin && <NavLink to={'/dashboard'}>Dashboard</NavLink>}
						{!isAuthenticated ? null : (
								<NavLink to={'/registro'} className={isActiveStyle}>
									Registro
								</NavLink>
						  ) && isActive ? null : (
							<NavLink to={'/registro'} className={isActiveStyle}>
								Registro
							</NavLink>
						)}
						{isAuthenticated && <LogoutBtn />}
					</div>
				</div>
			</div>

			{/* Mobile version */}

			<div className='flex flex-row w-screen text-[#cbcaca]  bg-[#07070A] items-center h-24 2xl:hidden xl:hidden lg:hidden'>
				<div className=''>
					<NavLink to='/'>
						<div className='w-2'>
							<Spline
								className='scale-[.18]'
								scene='https://prod.spline.design/MxBpL47FBda9L3Lp/scene.splinecode'
							/>
						</div>
					</NavLink>
				</div>
				<br />
				<div className='relative hover:cursor-pointer w-screen'>
					<button
						onClick={() => setOpen(!open)}
						className='w-8 absolute top-1/2 transform -translate-y-1/2 right-8 '
					>
						<img src={icono_menu} alt='icono-menu' />
					</button>
				</div>
			</div>

			<div className={!open ? '' : 'hidden'}>
				<div className='relative'>
					<div className='absolute top-0 z-100  h-auto w-screen bg-[#07070A]'>
						<div
							className={`flex flex-col text-[#ffffff] gap-8 p-20 text-2xl items-center transition-all ease-in-out duration-1000 ${
								open ? 'opacity-0' : 'opacity-100'
							}`}
						>
							<NavLink
								to='/home'
								className={isActiveStyle}
								onClick={() => setOpen(!open)}
							>
								Inicio
							</NavLink>

							<NavLink
								to='/nosotros'
								className={isActiveStyle}
								onClick={() => setOpen(!open)}
							>
								Nosotros
							</NavLink>

							<NavLink
								to='/calendario'
								className={isActiveStyle}
								onClick={() => setOpen(!open)}
							>
								Calendario
							</NavLink>

							<NavLink
								to='/blog'
								className={isActiveStyle}
								onClick={() => setOpen(!open)}
							>
								Blog
							</NavLink>

							<NavLink
								to='/planes'
								className={isActiveStyle}
								onClick={() => setOpen(!open)}
							>
								Planes
							</NavLink>

							{!isAuthenticated && <LoginBtn onClick={() => setOpen(!open)} />}

							{isActive && <NavLink to={`/perfil/${matchId}`}>Perfil</NavLink>}
							{isAdmin && <NavLink to={'/dashboard'}>Dashboard</NavLink>}
							{!isAuthenticated ? null : (
									<NavLink
										to={'/registro'}
										className={isActiveStyle}
										onClick={() => setOpen(!open)}
									>
										registro
									</NavLink>
							  ) && isActive ? null : (
								<NavLink
									to={'/registro'}
									className={isActiveStyle}
									onClick={() => setOpen(!open)}
								>
									registro
								</NavLink>
							)}
							{isAuthenticated && <LogoutBtn onClick={() => setOpen(!open)} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
