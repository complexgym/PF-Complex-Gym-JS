import React, { useState } from 'react';
import SideNav from '../SideNav';
import { useDispatch, useSelector } from 'react-redux';
import PlansCard from './cards/PlansCard';
import ValidatePlan from './ValidatePlan.js';
import { getAllPlans, postPlans } from '../../../redux/actions/actions';

const AllPlans = () => {
	const { initial_plans } = useSelector((s) => s);

	const [input, setInput] = useState({
		name: '',
		price: '',
		tags: [],
	});

	const [newTag, setNewTag] = useState('');

	const [error, setError] = useState({});

	const dispatch = useDispatch();

	const handleChange = (e) => {
		if (e.target.name === 'price') {
			setInput({
				...input,
				[e.target.name]: Number(e.target.value),
			});
		} else if (e.target.name === 'name') {
			setInput({
				...input,
				[e.target.name]: e.target.value,
			});
		}
		setError(
			ValidatePlan({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleChangeTag = (e) => {
		setNewTag(e.target.value);
	};

	const handleAddTag = (e) => {
		if (input.tags.length < 3) {
			setInput({
				...input,
				tags: [...input.tags, newTag],
			});
			setNewTag('');
		} else {
			swal({
				title: 'Atención',
				text: `Se pueden añadir hasta tres tags`,
				icon: 'warning',
				dangerMode: true,
			});
		}
	};

	const handleRemoveTag = (e, tag) => {
		e.preventDefault();
		setInput({
			...input,
			tags: input?.tags?.filter((t) => t !== tag),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postPlans(input));
		dispatch(getAllPlans());
		setInput({
			name: '',
			price: '',
			tags: [],
		});
		swal({
			title: 'Gracias!',
			text: '¡Plan creado correctamente!',
			icon: 'success',
		});
	};

	return (
		<div>
			<div className='m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default text-slate-500 bg-light-gray min-h-screen'>
				<div className='w-full h-full bg-light-gray dark:hidden'></div>

				<SideNav />

				<div className='relative h-full transition-all duration-200 ease-in-out xl:ml-68 rounded-xl'>
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
										Planes
									</li>
								</ol>
								<h6 className='mb-0 font-bold text-white capitalize'>Planes</h6>
							</nav>
						</div>
					</nav>

					<div className='w-full px-6 py-6 mx-auto'>
						<div className='flex flex-wrap -mx-3'>
							<div className='flex-none w-full max-w-full px-3'>
								{/* form */}
								<form
									onSubmit={(e) => handleSubmit(e)}
									className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full px-10 py-10 mt-4 gap-8
									bg-white rounded-xl'
								>
									<div>
										{/* plans name */}
										<p className='font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
											Nombre del plan*
										</p>
										<input
											type='text'
											name='name'
											id='name'
											value={input.name}
											autoComplete='name'
											onChange={handleChange}
											className='text-center w-full text-sm fease  leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 left-4'
											placeholder={`"Plan complex"`}
										/>
										{error?.name && (
											<p className='text-red-500 text-center'>{error.name}</p>
										)}
									</div>

									{/* prices plan */}
									<div className=''>
										<p className='font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
											Precio*
										</p>
										<input
											type='number'
											name='price'
											id='price'
											value={input.price}
											autoComplete='off'
											onChange={handleChange}
											className='ml-4 text-center text-sm w-full  leading-5.6 relative block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 '
											placeholder='1000'
										/>
										{error?.price && (
											<p className='text-red-500 text-center'>{error.price}</p>
										)}
									</div>

									{/* tags name */}
									<div>
										<p className='font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
											Tags
										</p>
										<div className='flex items-center border border-gray-300 rounded-lg px-4 '>
											<input
												type='text'
												name='tags'
												id='tags'
												value={newTag}
												autoComplete='off'
												onChange={handleChangeTag}
												className='ml-4 w-full text-center text-sm leading-5.6 relative block min-w-0 flex-auto rounded-lg border border-none  border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500'
												placeholder='"El mejor"'
											/>
											<i
												className='fa fa-paper-plane cursor-pointer lighter-blue'
												aria-hidden='true'
												onClick={handleAddTag}
											></i>
										</div>
										<div className='flex justify-center'>
											{input?.tags?.length > 0 &&
												input?.tags?.map((tag) => {
													return (
														<div className='flex mr-2 mt-4'>
															<img
																className='w-5 h-5 mr-1 cursor-pointer'
																src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679262195/delete_2_nh2we5.png'
																onClick={(e) => handleRemoveTag(e, tag)}
															/>
															<span>{tag}</span>
														</div>
													);
												})}
										</div>
									</div>

									{/* submit button */}
									<div className='flex w-full items-center'>
										<button
											type='submit'
											className='inline-block ml-4 w-full md:w-32 h-12 py-2 px-4 mb-0 font-bold text-white capitalize shadow-sm fill-current bg-lighter-blue dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl relative left-2 top-2'
										>
											Crear Plan
										</button>
									</div>
								</form>

								{/* table */}
								<div className='relative flex flex-col min-w-0 mt-6 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className='p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent'>
										<h6 className='dark:text-white'>Tabla Planes</h6>
									</div>
									<div className='flex-auto px-0 pt-0 pb-2'>
										<div className='p-0 overflow-x-auto'>
											<table className='items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500'>
												<thead className='align-bottom'>
													<tr>
														<th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 text-sm opacity-70'>
															Plan
														</th>

														<th className='px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70'>
															Precio (en $)
														</th>

														<th className='py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70'>
															Tags{' '}
															<small className='underline lowercase'>
																(separar en comas)
															</small>
														</th>

														<th className='px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70'>
															¿Editar?
														</th>

														<th className='py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70'>
															¿Enviar?
														</th>

														<th className='py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70'>
															Borrar
														</th>
													</tr>
												</thead>
												<tbody>
													{initial_plans.map((plan) => {
														return <PlansCard plans={plan} />;
													})}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllPlans;
