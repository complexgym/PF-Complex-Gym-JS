import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';

const DashBoard = () => {
	return (
		<div>
			<body className='m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500'>
				<div className='absolute w-full h-full bg-blue-500 dark:hidden min-h-75'></div>
				{/* <!-- sidenav  --> */}
				<SideNav />
				{/* <!-- end sidenav --> */}

				<main className='relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl'>
					{/* <!-- Navbar --> */}
					<nav className='relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start'>
						<div className='flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit'>
							<nav>
								
								{/* <!-- breadcrumb --> */}
								<ol className='flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16'>
									<li className='text-sm leading-normal'>
										<a className='text-white opacity-50'>Paginas</a>
									</li>
									<li
										className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
										aria-current='page'
									>
										Dashboard
									</li>
								</ol>
								<h6 className='mb-0 font-bold text-white capitalize'>Dashboard</h6>
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
							</div>
						</div>
					</nav>

					{/* <!-- end Navbar --> */}

					{/* <!-- cards --> */}
					<div className='w-full px-6 py-6 mx-auto'>
						{/* <!-- row 1 --> */}
						<div className='flex flex-wrap -mx-3'>
							{/* <!-- card1 --> */}
							<div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
								<div className='relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className='flex-auto p-4'>
										<div className='flex flex-row -mx-3'>
											<div className='flex-none w-2/3 max-w-full px-3'>
												<div>
													<p className='mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60'>
														Today's Money
													</p>
													<h5 className='mb-2 font-bold dark:text-white'>$53,000</h5>
													<p className='mb-0 dark:text-white dark:opacity-60'>
														<span className='text-sm font-bold leading-normal text-emerald-500'>
															+55%
														</span>
														since yesterday
													</p>
												</div>
											</div>
											<div className='px-3 text-right basis-1/3'>
												<div className='inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500'>
													<i className='ni leading-none ni-money-coins text-lg relative top-3.5 text-white'></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* <!-- card2 --> */}
							<div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
								<div className='relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className='flex-auto p-4'>
										<div className='flex flex-row -mx-3'>
											<div className='flex-none w-2/3 max-w-full px-3'>
												<div>
													<p className='mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60'>
														Today's Users
													</p>
													<h5 className='mb-2 font-bold dark:text-white'>2,300</h5>
													<p className='mb-0 dark:text-white dark:opacity-60'>
														<span className='text-sm font-bold leading-normal text-emerald-500'>
															+3%
														</span>
														since last week
													</p>
												</div>
											</div>
											<div className='px-3 text-right basis-1/3'>
												<div className='inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600'>
													<i className='ni leading-none ni-world text-lg relative top-3.5 text-white'></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* <!-- card3 --> */}
							<div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
								<div className='relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className='flex-auto p-4'>
										<div className='flex flex-row -mx-3'>
											<div className='flex-none w-2/3 max-w-full px-3'>
												<div>
													<p className='mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60'>
														New Clients
													</p>
													<h5 className='mb-2 font-bold dark:text-white'>+3,462</h5>
													<p className='mb-0 dark:text-white dark:opacity-60'>
														<span className='text-sm font-bold leading-normal text-red-600'>
															-2%
														</span>
														since last quarter
													</p>
												</div>
											</div>
											<div className='px-3 text-right basis-1/3'>
												<div className='inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400'>
													<i className='ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white'></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* <!-- card4 --> */}
							<div className='w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4'>
								<div className='relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className='flex-auto p-4'>
										<div className='flex flex-row -mx-3'>
											<div className='flex-none w-2/3 max-w-full px-3'>
												<div>
													<p className='mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60'>
														Sales
													</p>
													<h5 className='mb-2 font-bold dark:text-white'>$103,430</h5>
													<p className='mb-0 dark:text-white dark:opacity-60'>
														<span className='text-sm font-bold leading-normal text-emerald-500'>
															+5%
														</span>
														than last month
													</p>
												</div>
											</div>
											<div className='px-3 text-right basis-1/3'>
												<div className='inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500'>
													<i className='ni leading-none ni-cart text-lg relative top-3.5 text-white'></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- cards row 3 --> */}

						<div className='flex flex-wrap mt-6 -mx-3'>
							<div className='w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none'>
								<div className='relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border'>
									<div className='p-4 pb-0 mb-0 rounded-t-4'>
										<div className='flex justify-between'>
											<h6 className='mb-2 dark:text-white'>Clientes</h6>
										</div>
									</div>
									<div className='overflow-x-auto'>
										<table className='items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40'>
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
																	Admin
																</p>
															</div>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Sales:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																2500
															</h6>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Value:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																$230,900
															</h6>
														</div>
													</td>
													<td className='p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='flex-1 text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Bounce:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																29.9%
															</h6>
														</div>
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
																	Entrenador
																</p>
															</div>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Sales:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																3.900
															</h6>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Value:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																$440,000
															</h6>
														</div>
													</td>
													<td className='p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='flex-1 text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Bounce:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																40.22%
															</h6>
														</div>
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
																	Cliente
																</p>
															</div>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Sales:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																1.400
															</h6>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Value:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																$190,700
															</h6>
														</div>
													</td>
													<td className='p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='flex-1 text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Bounce:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																23.44%
															</h6>
														</div>
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
																	Cliente
																</p>
															</div>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-0 whitespace-nowrap'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Sales:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																562
															</h6>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-0 whitespace-nowrap'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Value:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																$143,960
															</h6>
														</div>
													</td>
													<td className='p-2 text-sm leading-normal align-middle bg-transparent border-0 whitespace-nowrap'>
														<div className='flex-1 text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																Bounce:
															</p>
															<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																32.14%
															</h6>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className='w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none'>
								<div className='border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border'>
									<div className='p-4 pb-0 rounded-t-4'>
										<h6 className='mb-0 dark:text-white'>Publicaciones</h6>
									</div>
									<div className='flex-auto p-4'>
										<ul className='flex flex-col pl-0 mb-0 rounded-lg'>
											<li className='relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit'>
												<div className='flex items-center'>
													<div className='inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
														<i className='text-white ni ni-mobile-button relative top-0.75 text-xxs'></i>
													</div>
													<div className='flex flex-col'>
														<h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
															Devices
														</h6>
														<span className='text-xs leading-tight dark:text-white/80'>
															250 in stock,{' '}
															<span className='font-semibold'>346+ sold</span>
														</span>
													</div>
												</div>
												<div className='flex'>
													<button className='group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white'>
														<i
															className='ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200'
															aria-hidden='true'
														></i>
													</button>
												</div>
											</li>
											<li className='relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-xl text-inherit'>
												<div className='flex items-center'>
													<div className='inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
														<i className='text-white ni ni-tag relative top-0.75 text-xxs'></i>
													</div>
													<div className='flex flex-col'>
														<h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
															Tickets
														</h6>
														<span className='text-xs leading-tight dark:text-white/80'>
															123 closed, <span className='font-semibold'>15 open</span>
														</span>
													</div>
												</div>
												<div className='flex'>
													<button className='group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white'>
														<i
															className='ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200'
															aria-hidden='true'
														></i>
													</button>
												</div>
											</li>
											<li className='relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-b-lg rounded-xl text-inherit'>
												<div className='flex items-center'>
													<div className='inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
														<i className='text-white ni ni-box-2 relative top-0.75 text-xxs'></i>
													</div>
													<div className='flex flex-col'>
														<h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
															Error logs
														</h6>
														<span className='text-xs leading-tight dark:text-white/80'>
															1 is active,{' '}
															<span className='font-semibold'>40 closed</span>
														</span>
													</div>
												</div>
												<div className='flex'>
													<button className='group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white'>
														<i
															className='ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200'
															aria-hidden='true'
														></i>
													</button>
												</div>
											</li>
											<li className='relative flex justify-between py-2 pr-4 border-0 rounded-b-lg rounded-xl text-inherit'>
												<div className='flex items-center'>
													<div className='inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
														<i className='text-white ni ni-satisfied relative top-0.75 text-xxs'></i>
													</div>
													<div className='flex flex-col'>
														<h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
															Happy users
														</h6>
														<span className='text-xs leading-tight dark:text-white/80'>
															<span className='font-semibold'>+ 430 </span>
														</span>
													</div>
												</div>
												<div className='flex'>
													<button className='group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white'>
														<i
															className='ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200'
															aria-hidden='true'
														></i>
													</button>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- end cards --> */}
				</main>
			</body>
		</div>
	);
};

export default DashBoard;
