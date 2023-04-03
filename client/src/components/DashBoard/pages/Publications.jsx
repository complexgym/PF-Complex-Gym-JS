import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getAllPosts } from '../../../redux/actions/actions';

const Publications = () => {
	const dispatch = useDispatch();

	const { initial_posts, ig_posts } = useSelector((s) => s);

	useEffect(() => {
		dispatch(getAllPosts());
	}, []);

	return (
		<div>
			<body className='m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default text-slate-500 bg-blue-500 min-h-screen'>
				<div className='w-full h-full bg-blue-500 dark:hidden'></div>

				<SideNav />

				<main className='relative h-full transition-all duration-200 ease-in-out xl:ml-68 rounded-xl'>
					{/* <!-- Navbar --> */}
					<nav className='relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start'>
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
										Publicaciones
									</li>
								</ol>
								<h6 className='mb-0 font-bold text-white capitalize'>Publicaciones</h6>
							</nav>
						</div>
					</nav>

					<div className='w-full px-6 py-6 mx-auto'>
						<div className='flex flex-wrap -mx-3'>
							<div className='flex-none w-full max-w-full px-3'>
								<div className='relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className=' grid grid-cols-2 p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent'>
										<div className='grid justify-start '>
											<Link to='/blog'>
												<button className='inline-block w-fit  py-2 px-4 text-center mb-0 font-bold text-white capitalize shadow-sm fill-current bg-blue-500 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
													Visitar el Blog
												</button>
											</Link>
										</div>
										<div className='grid justify-end '>
											<Link to='/blog/create'>
												<button className='inline-block w-fit  py-2 px-4 text-center mb-0 font-bold text-white capitalize shadow-sm fill-current bg-blue-500 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
													Crear Publicación
												</button>
											</Link>
										</div>
									</div>
									<div className='p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent'></div>
									<div className='flex-auto px-0 pt-0 pb-2'>
										<div className='p-0 overflow-x-auto'>
											<table className='items-center justify-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500'>
												<thead className='align-bottom'>
													<tr>
														<th className='px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Tipo de publicación
														</th>
														<th className='px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Titulo
														</th>
														<th className='px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Tag's
														</th>
														<th className='px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Calificación
														</th>
														<th className='py-3 pl-2 font-bold uppercase text-left align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															¿Borrar?
														</th>
													</tr>
												</thead>
												<tbody className='border-t'>
													{[...initial_posts, ...ig_posts]?.map((post) => {
														return <SinglePublication post={post} />;
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

const SinglePublication = ({ post }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		swal({
			title: "Querés borrar esta publicación?",
			text: "Si es así, click en Ok",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((result) => {
			if (result) {
				dispatch(deleteBlog(post.id));
				swal({
					title: "Publicación borrada!",
					icon: "success",
				});
			} else {
				swal("Borrado descartado", "", "info");
			}
		});
		
	};

	return (
		<tr>
			{/* type of publication */}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<div className='flex px-2'>
					<div>
						<img
							src={
								post?.isInstagram
									? 'https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196395/instagram_pozow5.png'
									: post?.image
							}
							className='inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 ease-in-out rounded-full h-8 w-8'
							alt='post img'
						/>
					</div>
					<div className='my-auto'>
						<h6 className='mb-0 text-sm leading-normal dark:text-white'>
							{post?.isInstagram ? 'Instagram' : 'Blog'}
						</h6>
					</div>
				</div>
			</td>

			{/* title */}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60 capitalize'>
					{post?.title}
				</p>
			</td>

			{/* tag */}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
					{post?.tag?.map((el, index) => {
						if (index === post?.tag?.length - 1) return el;
						else return el + '\n';
					})}
				</span>
			</td>

			{/* qualification*/}
			<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<div className='flex items-center justify-center'>
					<span className='mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
						60%
					</span>
					<div>
						<div className='text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200'>
							<div
								className='flex flex-col justify-center w-3/5 h-auto overflow-hidden text-center text-white transition-all bg-blue-500 rounded duration-600 ease bg-gradient-to-tl from-blue-700 to-cyan-500 whitespace-nowrap'
								role='progressbar'
								aria-valuenow='60'
								aria-valuemin='0'
								aria-valuemax='100'
							></div>
						</div>
					</div>
				</div>
			</td>

			{/* delete btn */}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<button className='inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400'>
									<i class="fa fa-trash-can text-xl cursor-pointer w-8 mr-2 text-grey-500 hover:text-red-500"
					onClick={handleDelete}
				></i>
					{/* <i className="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60"></i> */}
				</button>
			</td>
		</tr>
	);
};

export default Publications;
