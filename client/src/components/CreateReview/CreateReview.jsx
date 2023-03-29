import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReview } from '../../redux/actions/actions';
import ValidateRvw from './ValidationsRvw';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
import CloudinaryUploadImg from '../CloudinaryUploadImg/CloudinaryUploadImg';

const CreateReview = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const [input, setInput] = useState({
		name: '',
		url: '',
		text: '',
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			ValidateRvw({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(ValidateRvw(input));
		let error = ValidateRvw(input);
		// if (Object.values(error).length !== 0) {
		// 	swal({
		// 		title: 'Faltan Información',
		// 		text: `${error.name || error.text}`,
		// 		icon: 'warning',
		// 		dangerMode: true,
		// 	});
		// } else {
		dispatch(postReview(input));
		swal({
			title: 'Gracias!',
			text: '¡Opinión enviada con éxito!',
			icon: 'success',
		});
		navigate(`/home`);
		// }
	};

	function handleUpload(url) {
		setInput({
			...input,
			url,
		});
	}

	return (
		<>
			<div className=' relative font-text pt-12 px-10 '>
				<div className='md:grid md:grid-cols-2 md:gap-6 justify-center'>
					<div className='mt-5 md:col-span-2 md:mt-0'>
						<form onSubmit={(e) => handleSubmit(e)}>
							<h1 className='block text-3xl font-medium leading-6 text-gray-900'>
								Opinión
							</h1>
							<br />
							<div className='shadow sm:overflow-hidden sm:rounded-md'>
								<div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
									{/* NAME */}
									<div className='col-span-6 sm:col-span-3'>
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
										/>
										{/* {errors?.name && (
											<p className=' text-red-500'>
												<i>{errors.name}</i>
											</p>
										)} */}
									</div>

									{/* IMAGE */}
									<div className=''>
										<CloudinaryUploadImg
											onUpload={handleUpload}
											name='url'
											onClick={handleChange}
											className='pb-10'
										/>
									</div>

									{/* TEXT */}
									<div>
										<label
											htmlFor='text'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Opinión
										</label>
										<div className='mt-2'>
											<textarea
												id='input'
												name='text'
												value={input.text}
												rows={3}
												className=' indent-2 mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:py-1.5 sm:text-sm sm:leading-6'
												placeholder='Breve descripción de su perfil'
												defaultValue={''}
												onChange={handleChange}
											/>
											{/* {errors?.text && (
												<p className=' text-red-500'>
													<i>{errors.text}</i>
												</p>
											)} */}
										</div>
									</div>
								</div>

								{/* BUTTONS */}
								<div className='grid grid-cols-2 bg-gray-50 px-4 py-3 sm:px-6'>
									{/* BUTTON BACK */}
									<div className=''>
										<Link to={`/home`}>
											<button className='inline-flex justify-center rounded-md bg-lighter-blue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-darker-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darker-blue'>
												Volver
											</button>
										</Link>
									</div>

									{/* BUTTON-CREATE */}
									<div className=' text-right cols-start-2'>
										<button
											type='submit'
											className='inline-flex justify-center rounded-md bg-lighter-blue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-darker-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-vlighter-blue'
										>
											Enviar
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className='hidden sm:block' aria-hidden='true'>
				<div className='py-5'>
					<div className='border-t border-gray-200' />
				</div>
			</div>
		</>
	);
};

export default CreateReview;
