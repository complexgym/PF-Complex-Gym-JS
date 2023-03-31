import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideNav from './SideNav';
import { getAllPosts, getCalendar, getTrainers } from '../../redux/actions/actions';

const DashBoard = () => {
	const dispatch = useDispatch();

	const allClients = useSelector((state) => state.allClients);

	const initial_posts = useSelector((state) => state.initial_posts);

	const allPayments = useSelector((state) => state.allPayments);

	const client1 = allClients[allClients.length - 1];
	const client2 = allClients[allClients.length - 2];
	const client3 = allClients[allClients.length - 3];
	const client4 = allClients[allClients.length - 4];

	const post1 = initial_posts[initial_posts.length - 1];
	const post2 = initial_posts[initial_posts.length - 2];
	const post3 = initial_posts[initial_posts.length - 3];
	const post4 = initial_posts[initial_posts.length - 4];

	const allPay = allPayments.reverse();
	const pay1 = allPay[0];
	const pay2 = allPay[1];
	const pay3 = allPay[2];
	const pay4 = allPay[3];

	useEffect(() => {
		dispatch(getTrainers());
		dispatch(getCalendar());
		dispatch(getAllPosts());
	}, []);

	return (
		<div className=''>
			<body className='m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default text-slate-500 bg-blue-500 min-h-screen'>
				<div className='w-full h-full bg-blue-500 dark:hidden'></div>
				{/* <!-- sidenav  --> */}
				<SideNav />
				{/* <!-- end sidenav --> */}

				<main className='relative h-full transition-all duration-200 ease-in-out xl:ml-68 rounded-xl'>
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
														{pay1?.clientName}
													</p>
													<br />
													<h5 className='mb-2 font-bold dark:text-white'>
														${pay1?.paymentsAmount}
													</h5>
													<p className='mb-0 dark:text-white dark:opacity-60'>
														<span className='text-sm font-bold leading-normal text-emerald-500'>
															{pay1?.plansPayments}
														</span>
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
														{pay2?.clientName}
													</p>
													<br />
													<h5 className='mb-2 font-bold dark:text-white'>
														${pay2?.paymentsAmount}
													</h5>
													<p className='mb-0 dark:text-white dark:opacity-60'>
														<span className='text-sm font-bold leading-normal text-emerald-500'>
															{pay2?.plansPayments}
														</span>
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

							{/* <!-- card3 --> */}
							<div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
								<div className='relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className='flex-auto p-4'>
										<div className='flex flex-row -mx-3'>
											<div className='flex-none w-2/3 max-w-full px-3'>
												<div>
													<p className='mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60'>
														{pay3?.clientName}
													</p>
													<br />
													<h5 className='mb-2 font-bold dark:text-white'>
														${pay3?.paymentsAmount}
													</h5>
													<p className='mb-0 dark:text-white dark:opacity-60'>
														<span className='text-sm font-bold leading-normal text-emerald-500'>
															{pay3?.plansPayments}
														</span>
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

							{/* <!-- card4 --> */}
							<div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
								<div className='relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className='flex-auto p-4'>
										<div className='flex flex-row -mx-3'>
											<div className='flex-none w-2/3 max-w-full px-3'>
												<div>
													<p className='mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60'>
														{pay4?.clientName}
													</p>
													<br />
													<h5 className='mb-2 font-bold dark:text-white'>
														${pay4?.paymentsAmount}
													</h5>
													<p className='mb-0 dark:text-white dark:opacity-60'>
														<span className='text-sm font-bold leading-normal text-emerald-500'>
															{pay4?.plansPayments}
														</span>
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
																	src={client1?.picture}
																	className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
																	alt='user1'
																/>
															</div>
															<div className='flex flex-col justify-center'>
																<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																	{client1?.name} {client1?.lastName}
																</h6>
															</div>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client1?.mail}
															</p>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client1?.age} Años
															</p>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client1?.weight}kg / {client1?.height}cm
															</p>
														</div>
													</td>
												</tr>
												<tr>
													<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
														<div className='flex px-2 py-1'>
															<div>
																<img
																	src={client2?.picture}
																	className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
																	alt='user2'
																/>
															</div>
															<div className='flex flex-col justify-center'>
																<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																	{client2?.name} {client2?.lastName}
																</h6>
															</div>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client2?.mail}
															</p>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client2?.age} Años
															</p>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client2?.weight}kg / {client2?.height}cm
															</p>
														</div>
													</td>
												</tr>
												<tr>
													<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
														<div className='flex px-2 py-1'>
															<div>
																<img
																	src={client3?.picture}
																	className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
																	alt='user3'
																/>
															</div>
															<div className='flex flex-col justify-center'>
																<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																	{client3?.name} {client3?.lastName}
																</h6>
															</div>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client3?.mail}
															</p>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client3?.age} Años
															</p>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client3?.weight}kg / {client3?.height}cm
															</p>
														</div>
													</td>
												</tr>
												<tr>
													<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
														<div className='flex px-2 py-1'>
															<div>
																<img
																	src={client4?.picture}
																	className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
																	alt='user4'
																/>
															</div>
															<div className='flex flex-col justify-center'>
																<h6 className='mb-0 text-sm leading-normal dark:text-white'>
																	{client4?.name} {client4?.lastName}
																</h6>
															</div>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client4?.mail}
															</p>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client4?.age} Años
															</p>
														</div>
													</td>
													<td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
														<div className='text-center'>
															<p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
																{client4?.weight}kg / {client4?.height}cm
															</p>
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
														<img
															src={post1?.image}
															className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
															alt='user1'
														/>
													</div>
													<div className='flex flex-col'>
														<h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
															{post1?.title}
														</h6>
														<span className='text-xs leading-tight dark:text-white/80'>
															{post1?.tag}
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
											<li className='relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit'>
												<div className='flex items-center'>
													<div className='inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
														<img
															src={post2?.image}
															className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
															alt='user1'
														/>
													</div>
													<div className='flex flex-col'>
														<h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
															{post2?.title}
														</h6>
														<span className='text-xs leading-tight dark:text-white/80'>
															{post2?.tag}
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
											<li className='relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit'>
												<div className='flex items-center'>
													<div className='inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
														<img
															src={post3?.image}
															className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
															alt='user1'
														/>
													</div>
													<div className='flex flex-col'>
														<h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
															{post3?.title}
														</h6>
														<span className='text-xs leading-tight dark:text-white/80'>
															{post3?.tag}
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
											<li className='relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit'>
												<div className='flex items-center'>
													<div className='inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
														<img
															src={post4?.image}
															className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
															alt='user1'
														/>
													</div>
													<div className='flex flex-col'>
														<h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
															{post4?.title}
														</h6>
														<span className='text-xs leading-tight dark:text-white/80'>
															{post4?.tag}
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
