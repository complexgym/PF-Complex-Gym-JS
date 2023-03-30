import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postActivity } from '../../../../../redux/actions/actions';
import ValidateActivity from './ValidationsActivities';
import swal from 'sweetalert';
import CloudinaryUploadImg from '../../../../CloudinaryUploadImg/CloudinaryUploadImg';

const CreateActivity = () => {
	const dispatch = useDispatch();

	const [input, setInput] = useState({
		image: '',
		name: '',
		description: '',
		days: [],
		schedule: [],
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			ValidateActivity({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(ValidateActivity(input));
		let error = ValidateActivity(input);
		if (Object.values(error).length !== 0) {
			swal({
				title: 'Faltan Información',
				text: `${error.image || error.name || error.description}`,
				icon: 'warning',
				dangerMode: true,
			});
		} else {
			dispatch(postActivity(input));
			swal({
				title: 'Gracias!',
				text: '¡Actividad creada correctamente!',
				icon: 'success',
			});
			setInput({
				image: '',
				name: '',
				description: '',
			});
		}
	};

	function handleUpload(image) {
		setInput({
			...input,
			image,
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
											name='image'
											onClick={handleChange}
										/>
										{errors?.image && (
											<p className=' text-red-500'>
												<i>{errors.image}</i>
											</p>
										)}
									</div>

									<div className='bg-white px-4 py-1 sm:p-6'>
										<div className='grid grid-cols-6 gap-3'>
											{/* NAME */}
											<div className='col-span-6 sm:col-span-6 lg:col-span-1'>
												<label
													htmlFor='name'
													className='block text-sm font-medium leading-6 text-gray-900'
												>
													Nombre de la actividad
												</label>
												<input
													type='text'
													name='name'
													id='input'
													value={input.name}
													autoComplete='given-name'
													className=' indent-0 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
													onChange={handleChange}
													placeholder='"Running"'
												/>
												{errors?.name && (
													<p className=' text-red-500'>
														<i>{errors.name}</i>
													</p>
												)}
											</div>

											{/* DESCRIPTION */}
											<div className='col-span-6 sm:col-span-6 lg:col-span-4'>
												<label
													htmlFor='description'
													className='block text-sm font-medium leading-6 text-gray-900'
												>
													Descripción
												</label>
												<input
													type='text'
													name='description'
													id='description'
													value={input.description}
													autoComplete='off'
													className=' indent-0 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
													onChange={handleChange}
													placeholder='Describe tu actividad...'
												/>
												{errors?.description && (
													<p className=' text-red-500'>
														<i>{errors.description}</i>
													</p>
												)}
											</div>

											{/* BUTTON-CREATE */}
											<div className=' grid content-end bg-gray-50 col-span-6 sm:col-span-6 lg:col-span-1'>
												<button
													type='submit'
													className=' w-full inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-darker-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-vlighter-blue'
												>
													Crear
												</button>
											</div>
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

export default CreateActivity;
