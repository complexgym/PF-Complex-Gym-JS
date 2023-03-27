import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getClientDetail } from '../../redux/actions/actions';
//import image from '../../assets/img/dumbelldBgd.jpg'

export default function Profile() {
	const dispatch = useDispatch();

	const { user } = useAuth0();

	const allClient = useSelector((state) => state.allClients);

	let matchEmail = user && allClient.find((m) => m.mail === user.email);

	const matchId = matchEmail && matchEmail.id;

	useEffect(() => {
		dispatch(getClientDetail(matchId));
	}, []);

	return (
		<div className='profile-page'>
			<section className='relative block h-500-px'>
				<div
					class="absolute top-0 w-full h-full  bg-center bg-cover"
					style={{
						backgroundImage: `url(
							https://img3.wallspic.com/previews/3/6/3/0/20363/20363-physical_fitness-exercise_equipment-strength_training-barbell-tire-x750.jpg
						)`,
					}}
				>
					<span
						id='blackOverlay'
						className='w-full h-full absolute opacity-50 bg-black'
					></span>
				</div>
				<div
					className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px'
					style={{ transform: 'translateZ(0px)' }}
				>
					<svg
						className='absolute bottom-0 overflow-hidden'
						xmlns='http://www.w3.org/2000/svg'
						preserveAspectRatio='none'
						version='1.1'
						viewBox='0 0 2560 100'
						x='0'
						y='0'
					>
						<polygon
							className='text-blueGray-200 fill-current'
							points='2560 0 2560 100 0 100'
						></polygon>
					</svg>
				</div>
			</section>
			<section className='relative py-16 bg-blueGray-200'>
				<div className='container mx-auto px-4'>
					<div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64'>
						<div className='px-6'>
							<div className='flex flex-wrap justify-center'>
								<div className='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
									<div className='relative'>
										<img
											alt='...'
											src={matchEmail?.picture}
											className='shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px'
										/>
									</div>
								</div>
								<div className='w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center'>
									<div className='py-6 px-3 mt-32 sm:mt-0'>
										<Link to={`/editar/${matchId}`}>
											<button
												className='bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150'
												type='button'
											>
												Editar Perfil
											</button>
										</Link>
									</div>
								</div>
								<div className='w-full lg:w-4/12 px-4 lg:order-1'>
									<div className='flex justify-center py-4 lg:pt-4 pt-8'>
										<div className='mr-4 p-3 text-center'>
											<span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
												{matchEmail?.age}
											</span>
											<span className='text-sm text-blueGray-400'>Edad</span>
										</div>
										<div className='mr-4 p-3 text-center'>
											<span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
												{matchEmail?.weight}
											</span>
											<span className='text-sm text-blueGray-400'>Peso</span>
										</div>
										<div className='lg:mr-4 p-3 text-center'>
											<span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
												{matchEmail?.height}
											</span>
											<span className='text-sm text-blueGray-400'>Estatura</span>
										</div>
									</div>
								</div>
							</div>
							<div className='text-center mt-12'>
								<h3 className='text-4xl font-semibold leading-normal text-blueGray-700 mb-2'>
									{`${matchEmail?.name} ${matchEmail?.lastName}`}
								</h3>
								<h4 className='text-xl font-semibold leading-normal text-blueGray-700 mb-2'>
									{matchEmail?.user}
								</h4>
								<h4 className='text-xl font-semibold leading-normal text-blueGray-700 mb-2'>
									<i className='fas fa-envelope  mr-2 text-lg text-blueGray-400'></i>
									{matchEmail?.mail}
								</h4>
								<div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
									<i className='fas fa-id-card  mr-2 text-lg text-blueGray-400'></i>
									{matchEmail?.dni}
								</div>
								<div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
									<i className='fas fa-phone mr-2 text-lg text-blueGray-400'></i>
									{matchEmail?.phone}
								</div>
								<div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
									<i className='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400'></i>
									{`${matchEmail?.city}, ${matchEmail?.region}`}
								</div>
								<div className='mb-2 text-blueGray-600 mt-10'>
									<i className='fas fa-solid fa-location-arrow mr-2 text-lg text-blueGray-400'></i>{' '}
									{matchEmail?.address}
								</div>
								<div className='mb-2 text-blueGray-600'>
									<i className='fas fa-university mr-2 text-lg text-blueGray-400'></i>
									{matchEmail?.postalCode}
								</div>
							</div>
							<div className='mt-10 py-10 border-t border-blueGray-200 text-center'>
								<div className='flex flex-wrap justify-center'>
									<div className='w-full lg:w-9/12 px-4'>
										<p className='mb-4 text-lg leading-relaxed text-blueGray-700'>
											{matchEmail?.about}
										</p>
										{/* <a href='#pablo' className='font-normal text-pink-500'>
											Show more
										</a> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='flex justify-center'>
					<Link
						to='/home'
						className='bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 ease-linear transition-all duration-150 w-24 text-center'
					>
						Volver
					</Link>
				</div>
			</section>
		</div>
	);
}
