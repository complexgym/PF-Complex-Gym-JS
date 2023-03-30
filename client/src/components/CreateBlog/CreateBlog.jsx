import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Validate from './Validations';
import { useAuth0 } from '@auth0/auth0-react';
import { postBlog } from '../../redux/actions/actions';
import { Link, useNavigate } from 'react-router-dom';
import CloudinaryUploadImg from '../CloudinaryUploadImg/CloudinaryUploadImg';

export default function CreateBlog() {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const { user } = useAuth0();

	const [input, setInput] = useState({
		title: '',
		content: '',
		image: '',
		tag: [],
		author_name: user?.name,
		author_image: user?.picture,
		isInstagram: false,
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		if (e.target.name !== 'tag') {
			setInput({
				...input,
				[e.target.name]: e.target.value,
			});
		} else {
			if (!input.tag.find((tag) => tag === e.target.value)) {
				setInput({
					...input,
					tag: [...input.tag, e.target.value],
				});
			}
		}
		if (e.target.name === 'isInstagram') {
			const inBool = e.target.value === 'false' ? false : true;
			setInput({
				...input,
				[e.target.name]: inBool,
			});
		}
		setErrors(
			Validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleRemoveTag = (e, tagRemove) => {
		setInput({
			...input,
			tag: input?.tag?.filter((tag) => {
				return tag !== tagRemove;
			}),
		});
		setErrors(
			Validate({
				...input,
				tag: input.tag,
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(Validate(input));

		let error = Validate(input);

		if (Object.values(error).length !== 0) {
			swal({
				title: 'Falta Información',
				text: `${error.title || error.content || error.tag || error.image}`,
				icon: 'warning',
				dangerMode: true,
			});
		} else {
			dispatch(postBlog(input));
			swal({
				title: 'Gracias!',
				text: '¡Información creada correctamente!',
				icon: 'success',
			});
			setInput({
				title: '',
				content: '',
				image: '',
				tag: [],
				author_name: user?.name,
				author_image: user?.picture,
				isInstagram: false,
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
			<div className=' relative pt-8 pb-10 px-10 '>
				<div className='md:grid md:grid-cols-2 md:gap-6 justify-center'>
					<div className='mt-5 md:col-span-2 md:mt-0'>
						<div className='md:col-span-1'>
							<div className='px-4 sm:px-0'>
								<h3 className='text-base font-semibold leading-6 text-gray-900'>
									Crea un blog!
								</h3>
							</div>
						</div>
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className='shadow sm:overflow-hidden sm:rounded-md'>
								<div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
									{/* post title */}
									<div className='col-span-6 sm:col-span-3'>
										{/* is instagram */}
										<div>
											<label
												htmlFor='isInstagram'
												className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
											>
												¿Es de instagram?
											</label>

											<div className='mb-4'>
												<select
													id='isInstagram'
													className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
													name='isInstagram'
													value={input.isInstagram}
													onChange={handleChange}
												>
													<option value=''>Seleccione una opción...</option>
													<option value={true} selected>
														Sí
													</option>
													<option value={false}>No</option>
												</select>
											</div>
										</div>

										{/* post image */}
										{input.isInstagram === false && (
											<CloudinaryUploadImg
												onUpload={handleUpload}
												name='image'
												onClick={handleChange}
												className='pb-10'
											/>
										)}

										{/* link instagram */}
										{input.isInstagram === true && (
											<div>
												<label
													htmlFor='link-ig'
													className='block text-sm font-medium leading-6 text-gray-900'
												>
													Link instagram
												</label>
												<input
													type='url'
													name='image'
													id='link-ig'
													onChange={handleChange}
													className=' indent-2 mb-4 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												/>
												{errors?.image && (
													<p className=' text-red-500'>
														<i>{errors?.image}</i>
													</p>
												)}
											</div>
										)}

										{/* title */}
										<div>
											<label
												htmlFor='title'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Título
											</label>
											<input
												type='text'
												name='title'
												id='title'
												value={input.title}
												required
												className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
											{errors?.title && !errors?.image && (
												<p className=' text-red-500'>
													<i>{errors?.title}</i>
												</p>
											)}
										</div>
									</div>

									{/* post content */}
									<div className='col-span-6 sm:col-span-4'>
										<label
											htmlFor='mail'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Contenido
										</label>
										<textarea
											id='content'
											name='content'
											value={input.content}
											rows={3}
											className='indent-2 mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6'
											placeholder='Mensaje del blog'
											defaultValue={''}
											onChange={handleChange}
										/>
										{errors?.content && !errors.title && (
											<p className=' text-red-500'>
												<i>{errors.content}</i>
											</p>
										)}
									</div>

									{/* post tag  */}
									<div className='mr-4'>
										<label
											htmlFor='tag'
											className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
										>
											Temas
										</label>
										<select
											id='tag'
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
											name='tag'
											onChange={handleChange}
											value={
												input?.tag?.length > 0 ? input?.tag[input?.tag?.length - 1] : ''
											}
										>
											<option value='' selected>
												Seleccione una opción...
											</option>
											<option value='Fitness'>Fitness</option>
											<option value='Entrenamiento'>Entrenamiento</option>
											<option value='Salud'>Salud</option>
											<option value='Administrativo'>Administrativo</option>
										</select>

										{errors?.tag && !errors?.content && !errors?.title && (
											<p className=' text-red-500'>
												<i>{errors.tag}</i>
											</p>
										)}

										<div className='flex'>
											{input?.tag?.length > 0 &&
												input?.tag?.map((tag) => {
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
								</div>
							</div>

							{/* BUTTONS */}
							<div className='grid grid-cols-2 bg-gray-50 px-4 py-3 sm:px-6'>
								{/* BUTTON BACK */}
								<div className=''>
									<Link to={`/dashboard/publicaciones`}>
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
										Crear
									</button>
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
}

// {
//     id: 1,
//     authorId: 1,
//     title: 'Fitoasdjodas',
//     content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjFMwZ8wX771Lvk-KTRVczkIUtu3AYk1YEA&usqp=CAU',
//     tag: [
//       'Entrenamiento'
//     ],
//     createdAt: '2023-03-17T14:09:45.414Z',
//     updatedAt: '2023-03-17T14:09:45.414Z'
//   },
