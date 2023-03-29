import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTrainer } from '../../redux/actions/actions';
import ValidateTrainer from './ValidationsTrainer';
import swal from 'sweetalert';
import CloudinaryUploadImg from '../../../../CloudinaryUploadImg/CloudinaryUploadImg';

const CreateTrainner = () => {
	const dispatch = useDispatch();

	const [input, setInput] = useState({
		user: '',
		picture: '',
		name: '',
		lastName: '',
		phone: '',
		mail: '',
		address: '',
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			ValidateTrainer({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(ValidateTrainer(input));
		let error = ValidateTrainer(input);
		if (Object.values(error).length !== 0) {
			swal({
				title: 'Faltan Información',
				text: `${
					error.user ||
					error.name ||
					error.lastName ||
					error.phone ||
					error.mail ||
					error.address
				}`,
				icon: 'warning',
				dangerMode: true,
			});
		} else {
			dispatch(postTrainer(input));
			swal({
				title: 'Gracias!',
				text: '¡Entrenador creado correctamente!',
				icon: 'success',
			});
		}
	};

	function handleUpload(picture) {
		setInput({
			...input,
			picture,
		});
	}

	return (
		<>
			<div className=' relative font-text pt-1 px-1 '>
				<div className='md:grid md:grid-cols-2 md:gap-6 justify-center'>
					<div className='mt-1 md:col-span-2 md:mt-0'>
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className='shadow sm:overflow-hidden sm:rounded-md'>
								<div className='space-y-6 bg-white px-4 py-1 sm:p-6'>
									{/* UPLOAD IMAGE */}
									<div>
										<CloudinaryUploadImg
											onUpload={handleUpload}
											name='picture'
											onClick={handleChange}
										/>
									</div>

									<div className='bg-white px-4 py-1 sm:p-6'>
										<div className='grid grid-cols-6 gap-3'>
											{/* USERNAME */}
											<div className='col-span-6 sm:col-span-3 lg:col-span-1'>
												<label
													htmlFor='user'
													className='block text-sm font-medium leading-6 text-gray-900'
												>
													Nombre de usuario
												</label>
												<input
													type='text'
													name='user'
													id='input'
													value={input.user}
													autoComplete='given-name'
													className=' indent-0 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
													onChange={handleChange}
													placeholder='COMPLEX'
												/>
												{errors?.user && (
													<p className=' text-red-500'>
														<i>{errors.user}</i>
													</p>
												)}
											</div>

											{/* EMAIL */}
											<div className='col-span-6 sm:col-span-3 lg:col-span-1'>
												<label
													htmlFor='mail'
													className='block text-sm font-medium leading-6 text-gray-900'
												>
													Correo electrónico
												</label>
												<input
													type='text'
													name='mail'
													id='mail'
													value={input.mail}
													autoComplete='mail'
													className=' indent-0 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
													onChange={handleChange}
													placeholder='proyecto.complex.gym@gmail.com'
												/>
												{errors?.mail && (
													<p className=' text-red-500'>
														<i>{errors.mail}</i>
													</p>
												)}
											</div>

											{/* NAME */}
											<div className='col-span-6 sm:col-span-3 lg:col-span-1'>
												<label
													htmlFor='name'
													className='block text-sm font-medium leading-6 text-gray-900'
												>
													Nombre
												</label>
												<input
													type='text'
													name='name'
													id='name'
													value={input.name}
													autoComplete='given-name'
													className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
													onChange={handleChange}
													placeholder='Complex'
												/>
												{errors?.name && (
													<p className=' text-red-500'>
														<i>{errors.name}</i>
													</p>
												)}
											</div>

											{/* LASTNAME */}
											<div className='col-span-6 sm:col-span-3 lg:col-span-1'>
												<label
													htmlFor='lastName'
													className='block text-sm font-medium leading-6 text-gray-900'
												>
													Apellido
												</label>
												<input
													type='text'
													name='lastName'
													id='lastName'
													value={input.lastName}
													autoComplete='family-name'
													className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
													onChange={handleChange}
													placeholder='Gym'
												/>
												{errors?.lastName && (
													<p className=' text-red-500'>
														<i>{errors.lastName}</i>
													</p>
												)}
											</div>

											{/* PHONE */}
											<div className='col-span-6 sm:col-span-3 lg:col-span-1'>
												<label
													htmlFor='phone'
													className='block text-sm font-medium leading-6 text-gray-900'
												>
													Teléfono
												</label>
												<input
													type='text'
													name='phone'
													id='phone'
													value={input.phone}
													autoComplete='phone'
													className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
													placeholder='Ej: +54 3442 48-0617'
													onChange={handleChange}
												/>
												{errors?.phone && (
													<p className=' text-red-500'>
														<i>{errors.phone}</i>
													</p>
												)}
											</div>

											{/* ADDRESS */}
											<div className='col-span-6 sm:col-span-3 lg:col-span-1'>
												<label
													htmlFor='address'
													className='block text-sm font-medium leading-6 text-gray-900'
												>
													Dirección
												</label>
												<input
													type='text'
													name='address'
													id='address'
													value={input.address}
													autoComplete='address'
													className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
													onChange={handleChange}
													placeholder='Calle 114 entre 29 / 31'
												/>
												{errors?.address && (
													<p className=' text-red-500'>
														<i>{errors.address}</i>
													</p>
												)}
											</div>
										</div>
									</div>

									{/* BUTTON-CREATE */}
									<div className='bg-gray-50 px-4 py-3 sm:px-6'>
										<div className=' text-center'>
											<button
												type='submit'
												className=' w-[10vw] inline-flex justify-center rounded-md bg-lighter-blue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-darker-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-vlighter-blue'
											>
												Crear
											</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateTrainner;
