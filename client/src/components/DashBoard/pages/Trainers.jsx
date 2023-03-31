import React, { useEffect } from 'react';
import SideNav from '../SideNav';
import { useDispatch, useSelector } from 'react-redux';
import TrainersCard from './cards/TrainersCard';
import CreateTrainner from './cards/CreateTrainer/CreateTrainner';
import { getTrainers } from '../../../redux/actions/actions';

const Trainers = () => {
	const dispatch = useDispatch();

	const trainers = useSelector((state) => state.trainers);

	useEffect(() => {
		dispatch(getTrainers());
	}, []);
	return (
		<div>
			<body className='m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default text-slate-500 bg-blue-500 min-h-screen'>
				<div className='w-full h-full bg-blue-500 dark:hidden'></div>

				<SideNav />

				<main className='relative h-full transition-all duration-200 ease-in-out xl:ml-68 rounded-xl'>
					{/* <!-- Navbar --> */}
					<nav
						className='relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start'
						navbar-main
						navbar-scroll='false'
					>
						<div className='flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit'>
							<nav>
								{/* <!-- breadcrumb --> */}
								<ol className='flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16'>
									<li className='text-sm leading-normal'>
										<a className='text-white opacity-50' href='javascript:;'>
											Paginas
										</a>
									</li>
									<li
										className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
										aria-current='page'
									>
										Entrenadores
									</li>
								</ol>
								<h6 className='mb-0 font-bold text-white capitalize'>Entrenadores</h6>
							</nav>
						</div>
					</nav>

					<div className='w-full px-6 py-6 mx-auto'>
						<div className='flex flex-wrap -mx-3'>
							<div className='flex-none w-full max-w-full px-3'>
								<div className='relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className='grid border-b-0 border-b-solid rounded-t-2xl border-b-transparent'>
										<CreateTrainner />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='w-full px-6 py-6 mx-auto'>
						<div className='flex flex-wrap -mx-3'>
							<div className='flex-none w-full max-w-full px-3'>
								<div className='relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className='p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent'>
										<h6 className='dark:text-white'>Tabla Entrenadores</h6>
									</div>
									<div className='flex-auto px-0 pt-0 pb-2'>
										<div className='p-0 overflow-x-auto'>
											<table className='items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500'>
												<thead className='align-bottom'>
													<tr>
														<th className='px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 text-s opacity-70'>
															Entrenador
														</th>
														<th className='px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-s text-slate-400 opacity-70'>
															Teléfono
														</th>
														<th className='px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-s text-slate-400 opacity-70'>
															Dirección
														</th>
													</tr>
												</thead>
												<tbody>
													{!trainers.error &&
														trainers?.map((trainer) => {
															return <TrainersCard trainer={trainer} />;
														})}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</body>
		</div>
	);
};

export default Trainers;
