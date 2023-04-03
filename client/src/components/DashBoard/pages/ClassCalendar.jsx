import React, { useEffect, useState } from 'react';
import SideNav from '../SideNav';
import { getCalendar, postCalendar } from '../../../redux/actions/actions';
import ValidateCalendar from './ValidateCalendar';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import ClassCard from './cards/ClassCard';

const ClasesCalendar = () => {
	const dispatch = useDispatch();

	const { allCalendar } = useSelector((state) => state);

	const [input, setInput] = useState({
		day: 0,
		month: 0,
		year: 0,
		hour: '',
		classes: '',
	});

	const [error, setErrors] = useState({});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			ValidateCalendar({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(ValidateCalendar(input));
		let error = ValidateCalendar(input);
		if (Object.values(error).length !== 0) {
			swal({
				title: 'Faltan Información',
				text: `${error.day || error.month || error.year || error.hour || error.classes}`,
				icon: 'warning',
				dangerMode: true,
			});
		} else {
			dispatch(postCalendar(input));
			swal({
				title: 'Gracias!',
				text: '¡Clase creada correctamente!',
				icon: 'success',
			});
		}
	};

	useEffect(() => {
		dispatch(getCalendar());
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
										Calendario
									</li>
								</ol>
								<h6 className='mb-0 font-bold text-white capitalize'>Calendario</h6>
							</nav>
						</div>
					</nav>

					<div className='w-full px-6 py-6 mx-auto'>
						<div className='flex flex-wrap -mx-3'>
							<div className='flex-none w-full max-w-full px-3'>
								<div className='relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className='grid border-b-0 border-b-solid rounded-t-2xl border-b-transparent'>
										<table className='items-center justify-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500'>
											<thead className='align-bottom'>
												<tr className='grid grid-cols-6 w-full p-10 gap-8 content-center'>
													<th className='font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
														Actividad
													</th>
													<th className='font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
														Día
													</th>
													<th className='font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
														Mes
													</th>
													<th className='font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
														Año
													</th>
													<th className='font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
														Hora
													</th>
												</tr>
											</thead>
										</table>
										<div>
											<form
												onSubmit={(e) => handleSubmit(e)}
												className='grid grid-cols-6 w-full pl-10 pb-10 pr-10 -mt-10 gap-8'
											>
												<input
													type='text'
													name='classes'
													id='classes'
													value={input.classes}
													autoComplete='classes'
													onChange={handleChange}
													className='text-center text-sm focus:shadow-primary-outline ease  leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow'
													placeholder={`"Running"`}
												/>
												<input
													type='number'
													name='day'
													id='day'
													value={input.day}
													autoComplete='off'
													onChange={handleChange}
													className='ml-4 text-center text-sm focus:shadow-primary-outline ease  leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow'
													placeholder='Día'
												/>
												<input
													type='number'
													name='month'
													id='month'
													value={input.month}
													autoComplete='off'
													onChange={handleChange}
													className='ml-4 text-center text-sm focus:shadow-primary-outline ease  leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow'
													placeholder='Mes'
												/>
												<input
													type='number'
													name='year'
													id='year'
													value={input.year}
													autoComplete='off'
													onChange={handleChange}
													className='ml-4 text-center text-sm focus:shadow-primary-outline ease  leading-5.6 relative block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow'
													placeholder='Año'
												/>
												<input
													type='text'
													name='hour'
													id='hour'
													value={input.hour}
													autoComplete='off'
													onChange={handleChange}
													className='text-center text-sm focus:shadow-primary-outline ease  leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow'
													placeholder='08:00'
												/>
												<button
													type='submit'
													className='inline-block w-fit py-2 px-4 mb-0 font-bold text-white capitalize shadow-sm fill-current bg-blue-500 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'
												>
													Crear Clase
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='w-full px-6 py-6 mx-auto'>
						<div className='flex flex-wrap -mx-3'>
							<div className='flex-none w-full max-w-full px-3'>
								<div className='relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
									<div className=' grid grid-cols-2 p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent'>
										<div className=''>
											<h6 className='dark:text-white'>Calendario</h6>
										</div>
									</div>
									<div className='p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent'></div>
									<div className='flex-auto px-0 pt-0 pb-2'>
										<div className='p-0 overflow-x-auto'>
											<table className='items-center justify-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500'>
												<thead className='align-bottom'>
													<tr>
														<th className='text-center font-bold uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Actividad
														</th>
														<th className='text-center font-bold uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Dia
														</th>
														<th className='text-center font-bold uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Mes
														</th>
														<th className='text-center font-bold uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Año
														</th>
														<th className='text-center font-bold uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Hora
														</th>
														<th className='text-center font-bold uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															¿Editar?
														</th>
														<th className='text-center font-bold uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															¿Enviar?
														</th>
														<th className='text-center font-bold uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
															Borrar
														</th>
													</tr>
												</thead>

												{/* ALL CLASSES */}
												<tbody className='border-t'>
													{allCalendar.map((calendar) => {
														return <ClassCard calendar={calendar} />;
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

export default ClasesCalendar;
