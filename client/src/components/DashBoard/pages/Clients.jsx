import React from 'react';
import SideNav from '../SideNav';

const Clients = () => {
	return (
		<div>
			<body className='m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500'>
				<div className='absolute w-full h-full bg-blue-500 dark:hidden min-h-75'></div>

				<SideNav />

				<main className='relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl'>
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
										Clientes
									</li>
								</ol>
								<h6 className='mb-0 font-bold text-white capitalize'>Clientes</h6>
							</nav>

							<div className='flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto'>
								<div className='flex items-center md:ml-auto md:pr-4'>
									<div className='relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease'>
										<span className='text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all'>
											<i className='fas fa-search'></i>
										</span>
										<input
											type='text'
											className='pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow'
											placeholder='Type here...'
										/>
									</div>
								</div>
								<ul className='flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full'>
									<li className='flex items-center pl-4 xl:hidden'>
										<a
											href='javascript:;'
											className='block p-0 text-sm text-white transition-all ease-nav-brand'
											sidenav-trigger
										>
											<div className='w-4.5 overflow-hidden'>
												<i className='ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all'></i>
												<i className='ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all'></i>
												<i className='ease relative block h-0.5 rounded-sm bg-white transition-all'></i>
											</div>
										</a>
									</li>
									<li className='flex items-center px-4'>
										<a
											href='javascript:;'
											className='p-0 text-sm text-white transition-all ease-nav-brand'
										>
											<i fixed-plugin-button-nav className='cursor-pointer fa fa-cog'></i>
											{/* <!-- fixed-plugin-button-nav  --> */}
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>

					<div className='w-full px-6 py-6 mx-auto'>
						<div className='flex flex-wrap -mx-3'>
							<div className='flex-none w-full max-w-full px-3'>
								<div className='relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className='p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent'>
										<h6 className='dark:text-white'>Tabla Clientes</h6>
									</div>
									<div className='flex-auto px-0 pt-0 pb-2'>
										<div className='p-0 overflow-x-auto'>
											<table className='items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500'>
												<thead className='align-bottom'>
													<tr>
														<th className='px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Cliente
														</th>
														<th className='px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Información
														</th>
														<th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Estado
														</th>
														<th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Edad / Peso / Estatura
														</th>
														<th className='px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70'></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<div className='flex px-2 py-1'>
																<div>
																	<img
																		src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679529677/test_complex/team-2_mz5rnj.jpg'
																		className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
																		alt='user1'
																	/>
																</div>
																<div className='flex flex-col justify-center'>
																	<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																		John Michael
																	</h6>
																	<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																		john@creative-tim.com
																	</p>
																</div>
															</div>
														</td>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
																Manager
															</p>
															<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																Organization
															</p>
														</td>
														<td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<span className='bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
																Online
															</span>
														</td>
														<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																23/04/18
															</span>
														</td>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<a
																href='javascript:;'
																className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'
															>
																Edit
															</a>
														</td>
													</tr>
													<tr>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<div className='flex px-2 py-1'>
																<div>
																	<img
																		src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679529677/test_complex/team-1_kbys7i.jpg'
																		className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
																		alt='user2'
																	/>
																</div>
																<div className='flex flex-col justify-center'>
																	<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																		Alexa Liras
																	</h6>
																	<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																		alexa@creative-tim.com
																	</p>
																</div>
															</div>
														</td>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
																Programator
															</p>
															<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																Developer
															</p>
														</td>
														<td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<span className='bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
																Offline
															</span>
														</td>
														<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																11/01/19
															</span>
														</td>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<a
																href='javascript:;'
																className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'
															>
																Edit
															</a>
														</td>
													</tr>
													<tr>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<div className='flex px-2 py-1'>
																<div>
																	<img
																		src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679529677/test_complex/team-4_g4o6sg.jpg'
																		className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
																		alt='user3'
																	/>
																</div>
																<div className='flex flex-col justify-center'>
																	<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																		Laurent Perrier
																	</h6>
																	<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																		laurent@creative-tim.com
																	</p>
																</div>
															</div>
														</td>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
																Executive
															</p>
															<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																Projects
															</p>
														</td>
														<td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<span className='bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
																Online
															</span>
														</td>
														<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																19/09/17
															</span>
														</td>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<a
																href='javascript:;'
																className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'
															>
																Edit
															</a>
														</td>
													</tr>
													<tr>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<div className='flex px-2 py-1'>
																<div>
																	<img
																		src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679529677/test_complex/team-3_ns198o.jpg'
																		className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
																		alt='user4'
																	/>
																</div>
																<div className='flex flex-col justify-center'>
																	<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																		Michael Levi
																	</h6>
																	<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																		michael@creative-tim.com
																	</p>
																</div>
															</div>
														</td>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
																Programator
															</p>
															<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																Developer
															</p>
														</td>
														<td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<span className='bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
																Online
															</span>
														</td>
														<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																24/12/08
															</span>
														</td>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<a
																href='javascript:;'
																className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'
															>
																Edit
															</a>
														</td>
													</tr>
													<tr>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<div className='flex px-2 py-1'>
																<div>
																	<img
																		src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679529677/test_complex/marie_cpltzg.jpg'
																		className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
																		alt='user5'
																	/>
																</div>
																<div className='flex flex-col justify-center'>
																	<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																		Richard Gran
																	</h6>
																	<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																		richard@creative-tim.com
																	</p>
																</div>
															</div>
														</td>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
																Manager
															</p>
															<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																Executive
															</p>
														</td>
														<td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<span className='bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
																Offline
															</span>
														</td>
														<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																04/10/21
															</span>
														</td>
														<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
															<a
																href='javascript:;'
																className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'
															>
																Edit
															</a>
														</td>
													</tr>
													<tr>
														<td className='p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent'>
															<div className='flex px-2 py-1'>
																<div>
																	<img
																		src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679529677/test_complex/team-1_kbys7i.jpg'
																		className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
																		alt='user6'
																	/>
																</div>
																<div className='flex flex-col justify-center'>
																	<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																		Miriam Eric
																	</h6>
																	<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																		miriam@creative-tim.com
																	</p>
																</div>
															</div>
														</td>
														<td className='p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
																Programtor
															</p>
															<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																Developer
															</p>
														</td>
														<td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent'>
															<span className='bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
																Offline
															</span>
														</td>
														<td className='p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent'>
															<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
																14/09/20
															</span>
														</td>
														<td className='p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent'>
															<a
																href='javascript:;'
																className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'
															>
																Edit
															</a>
														</td>
													</tr>
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

export default Clients;
