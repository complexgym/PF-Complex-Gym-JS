import Spline from '@splinetool/react-spline';
import style from './style.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Landing2() {
	const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

	const allClient = useSelector((state) => state.allClients);

	let matchEmail = user && allClient.find((m) => m.mail === user.email);

	const isActive = matchEmail && matchEmail.active;

	return (
		<div className={style.container}>
			<div className={style.waves_container}>
				<Spline
					className={style.splinewaves}
					scene="https://prod.spline.design/ETlKk7yNQfbifC5m/scene.splinecode"
				/>
			</div>
			<div className={style.left_container}>
				<h1>El 90% del éxito se basa en el esfuerzo.</h1>
				<div className={style.buttons}>
					<Link to="/home">
						<button className={style.buttonn}>EXPLORAR</button>
					</Link>
					{!isAuthenticated && (
						<button className={style.buttonn} onClick={() => loginWithRedirect()}>
							INICIAR SESIÓN
						</button>
					)}
					{isAuthenticated && !isActive && (
						<button className={style.buttonn}>
							<NavLink to={'/registro'}>COMPLETA TU REGISTRO!</NavLink>
						</button>
					)}
					{isAuthenticated && (
						<button
							className={style.buttonn}
							onClick={() =>
								logout({ logoutParams: { returnTo: window.location.origin } })
							}
						>
							CERRAR SESIÓN
						</button>
					)}
				</div>
			</div>
			<div className={style.gym_container}>
				<div className={style.spline_gym_div}>
					<Spline
						className={style.gym_spline}
						scene="https://prod.spline.design/8ZGu1Nn72DALpfwr/scene.splinecode"
					/>
				</div>
			</div>
		</div>
	);
}
