import React from "react";
import { Link } from "react-router-dom";
import SideNav from "../SideNav";
import {useSelector} from "react-redux"

const Publications = () => {
	const {initial_posts, ig_posts} = useSelector(s=>s)

	return (
		<div>
			<body className='m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500'>
				<div className='absolute w-full h-full bg-blue-500 dark:hidden min-h-75'></div>

				<SideNav />

				<main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
					{/* <!-- Navbar --> */}
					<nav
						className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
						navbar-main
						navbar-scroll="false"
					>
						<div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
							<nav>
								{/* <!-- breadcrumb --> */}
								<ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
									<li className="text-sm leading-normal">
										<a className="text-white opacity-50" href="javascript:;">
											Paginas
										</a>
									</li>
									<li
										className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
										aria-current="page"
									>
										Publicaciones
									</li>
								</ol>
								<h6 className="mb-0 font-bold text-white capitalize">Publicaciones</h6>
							</nav>

							<div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
								<div className="flex items-center md:ml-auto md:pr-4">
									<div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
										<span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
											<i className="fas fa-search"></i>
										</span>
										<input
											type="text"
											className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow"
											placeholder="Type here..."
										/>
									</div>
								</div>
								<ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
									<li className="flex items-center pl-4 xl:hidden">
										<a
											href="javascript:;"
											className="block p-0 text-sm text-white transition-all ease-nav-brand"
											sidenav-trigger
										>
											<div className="w-4.5 overflow-hidden">
												<i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
												<i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
												<i className="ease relative block h-0.5 rounded-sm bg-white transition-all"></i>
											</div>
										</a>
									</li>
									<li className="flex items-center px-4">
										<a
											href="javascript:;"
											className="p-0 text-sm text-white transition-all ease-nav-brand"
										>
											<i fixed-plugin-button-nav className="cursor-pointer fa fa-cog"></i>
											{/* <!-- fixed-plugin-button-nav  --> */}
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>

					<div className="w-full px-6 py-6 mx-auto">
						<div className="flex flex-wrap -mx-3">
							<div className="flex-none w-full max-w-full px-3">
								<div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
									<div className=" grid grid-cols-2 p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
										<div className="">
											<h6 className="dark:text-white">Tabla de Publicaciones</h6>
										</div>
										<div className="grid justify-end ">
											<Link to="/blog/create">
												<button className="inline-block w-fit  py-2 px-4 text-center mb-0 font-bold text-white capitalize shadow-sm fill-current bg-blue-500 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
													Crear Publicación
												</button>
											</Link>
										</div>
									</div>
									<div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent"></div>
									<div className="flex-auto px-0 pt-0 pb-2">
										<div className="p-0 overflow-x-auto">
											<table className="items-center justify-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
												<thead className="align-bottom">
													<tr>
														<th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
															Tipo de publicación
														</th>
														<th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
															Titulo
														</th>
														<th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
															Tag's
														</th>
														<th className="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
															Calificación
														</th>
														<th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap"></th>
													</tr>
												</thead>
												<tbody className="border-t">
													{[...initial_posts, ...ig_posts]?.map(post=>{
														return <SinglePublication post={post}/>
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
	return (
		<tr>
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<div className="flex px-2">
					<div>
						<img
						src={post?.isInstagram ? "https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196395/instagram_pozow5.png" : post?.image}
						className="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 ease-in-out rounded-full h-8 w-8"
						alt="post img"
						/>
					</div>
					<div className="my-auto">
						<h6 className="mb-0 text-sm leading-normal dark:text-white">
							{post?.isInstagram ? "Instagram" : "Blog"}
						</h6>
					</div>
				</div>
			</td>
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60 capitalize">
					{post?.title}
				</p>
			</td>
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
					{post?.tag?.map((el,index)=>{
						if(index===post?.tag?.length-1) return el
						else return el + "\n"
					})}
				</span>
			</td>
			<td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<div className="flex items-center justify-center">
					<span className="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
						60%
					</span>
					<div>
						<div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
							<div
								className="flex flex-col justify-center w-3/5 h-auto overflow-hidden text-center text-white transition-all bg-blue-500 rounded duration-600 ease bg-gradient-to-tl from-blue-700 to-cyan-500 whitespace-nowrap"
								role="progressbar"
								aria-valuenow="60"
								aria-valuemin="0"
								aria-valuemax="100"
							></div>
						</div>
					</div>
				</div>
			</td>
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400">
					<i className="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60"></i>
				</button>
			</td>
		</tr>
	);
};

export default Publications;
