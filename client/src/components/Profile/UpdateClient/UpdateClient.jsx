import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClients, putClient } from '../../../redux/actions/actions';
import Validate from './UpdateValidations';
import { useAuth0 } from '@auth0/auth0-react';
import swal from 'sweetalert';
import CloudinaryUploadImg from '../../CloudinaryUploadImg/CloudinaryUploadImg';
import { useNavigate, Link } from 'react-router-dom';

export default function UpdateClient() {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const { user } = useAuth0();

	const allClient = useSelector((state) => state.allClients);

	let matchEmail = user && allClient.find((m) => m.mail === user.email);

	const matchId = matchEmail && matchEmail.id;

	const [input, setInput] = useState({
		user: matchEmail?.user,
		mail: matchEmail?.mail,
		picture: matchEmail?.picture,
		about: matchEmail?.about,
		name: matchEmail?.name,
		lastName: matchEmail?.lastName,
		phone: matchEmail?.phone,
		dni: matchEmail?.dni,
		age: matchEmail?.age,
		height: matchEmail?.height,
		weight: matchEmail?.weight,
		address: matchEmail?.address,
		city: matchEmail?.city,
		region: matchEmail?.region,
		postalCode: matchEmail?.postalCode,
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(Validate(input));
		let error = Validate(input);
		if (Object.values(error).length !== 0) {
			swal({
				title: 'Faltan Información',
				text: `${
					error.mail ||
					error.user ||
					error.name ||
					error.lastName ||
					error.phone ||
					error.dni ||
					error.age ||
					error.weight ||
					error.height ||
					error.address ||
					error.city
				}`,
				icon: 'warning',
				dangerMode: true,
			});
		} else {
			dispatch(putClient(input, matchId));
			swal({
				title: 'Gracias!',
				text: '¡Información actualizada correctamente!',
				icon: 'success',
			});
			navigate(`/home`);
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
			<div className=' relative font-text pt-12 px-10 '>
				<div className='md:grid md:grid-cols-2 md:gap-6 justify-center'>
					<div className='mt-5 md:col-span-2 md:mt-0'>
						<div className='md:col-span-1'>
							<div className='px-4 sm:px-0'>
								{/* PROFILE INFO */}
								<h3 className='text-base font-semibold leading-6 text-gray-900'>
									Perfil
								</h3>
								<p className='mt-1 text-sm text-gray-600'>
									Esta información se mostrará públicamente, así que ten cuidado con lo
									que compartes.
								</p>
							</div>
						</div>
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className='shadow sm:overflow-hidden sm:rounded-md'>
								<div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
									{/* USERNAME */}
									<div className='col-span-6 sm:col-span-3'>
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
											className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
											onChange={handleChange}
										/>
										{errors?.user && (
											<p className=' text-red-500'>
												<i>{errors.user}</i>
											</p>
										)}
									</div>

									{/* EMAIL */}
									<div className='col-span-6 sm:col-span-4'>
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
											className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
											onChange={handleChange}
											readOnly
										/>
									</div>

									{/* UPLOAD IMAGE */}
									<div className=''>
										{input.picture && (
											<label
												htmlFor='about'
												className='mt-2 ml-4 block text-sm font-medium leading-6 text-gray-900'
											>
												Foto actual
												<img
													src={matchEmail?.picture}
													className='h-32 w-32 object-cover rounded-full'
													alt='imagen actual'
												/>
											</label>
										)}
										<br />
										<CloudinaryUploadImg
											onUpload={handleUpload}
											name='picture'
											onClick={handleChange}
											className='pb-10'
										/>
									</div>

									{/* ABOUT */}
									<div>
										<label
											htmlFor='about'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Descripción
										</label>
										<div className='mt-2'>
											<textarea
												id='about'
												name='about'
												value={input.about}
												rows={3}
												className=' indent-2 mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:py-1.5 sm:text-sm sm:leading-6'
												placeholder='Breve descripción de su perfil'
												defaultValue={''}
												onChange={handleChange}
											/>
											{errors?.about && (
												<p className=' text-red-500'>
													<i>{errors.about}</i>
												</p>
											)}
										</div>
										<p className='mt-2 text-sm text-gray-500'>URL con hipervínculos.</p>
									</div>
								</div>

								<div className='hidden sm:block' aria-hidden='true'>
									<div className='py-5'>
										<div className='border-t border-gray-200' />
									</div>
								</div>

								{/* PERSONAL INFO */}
								<div className='md:col-span-1'>
									<div className='px-4 sm:px-0'>
										<h3 className='text-base font-semibold leading-6 text-gray-900'>
											Información Personal
										</h3>
										<p className='mt-1 text-sm text-gray-600'>
											Esta información espara el uso unico y exclusivo de la página
										</p>
									</div>
								</div>

								{/* NAME */}
								<div className='bg-white px-4 py-5 sm:p-6'>
									<div className='grid grid-cols-6 gap-6'>
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
											{errors?.name && (
												<p className=' text-red-500'>
													<i>{errors.name}</i>
												</p>
											)}
										</div>

										{/* LASTNAME */}
										<div className='col-span-6 sm:col-span-3'>
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
											/>
											{errors?.lastName && (
												<p className=' text-red-500'>
													<i>{errors.lastName}</i>
												</p>
											)}
										</div>

										{/* PHONE */}
										<div className='col-span-6 sm:col-span-3 lg:col-span-3'>
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

										{/* DNI */}
										<div className='col-span-6 sm:col-span-3 lg:col-span-3'>
											<label
												htmlFor='dni'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												DNI
											</label>
											<input
												type='number'
												name='dni'
												id='dni'
												value={input.dni}
												autoComplete='dni'
												className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
											{errors?.dni && (
												<p className=' text-red-500'>
													<i>{errors.dni}</i>
												</p>
											)}
										</div>

										{/* AGE */}
										<div className='col-span-6 sm:col-span-2 lg:col-span-2'>
											<label
												htmlFor='age'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Edad
											</label>
											<input
												type='number'
												name='age'
												id='age'
												value={input.age}
												autoComplete='age'
												className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
											{errors?.age && (
												<p className=' text-red-500'>
													<i>{errors.age}</i>
												</p>
											)}
										</div>

										{/* WEIGHT */}
										<div className='col-span-6 sm:col-span-2 lg:col-span-2'>
											<label
												htmlFor='weight'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Peso
											</label>
											<input
												type='number'
												name='weight'
												id='weight'
												value={input.weight}
												autoComplete='weight'
												className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
												placeholder='kg'
												onChange={handleChange}
											/>
											{errors?.weight && (
												<p className=' text-red-500'>
													<i>{errors.weight}</i>
												</p>
											)}
										</div>

										{/* HEIGHT */}
										<div className='col-span-6 sm:col-span-2 lg:col-span-2'>
											<label
												htmlFor='height'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Estatura
											</label>
											<input
												type='number'
												name='height'
												id='height'
												value={input.height}
												autoComplete='height'
												className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
												placeholder='cm'
												onChange={handleChange}
											/>
											{errors?.height && (
												<p className=' text-red-500'>
													<i>{errors.height}</i>
												</p>
											)}
										</div>

										{/* ADDRESS */}
										<div className='col-span-6'>
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
											/>
											{errors?.address && (
												<p className=' text-red-500'>
													<i>{errors.address}</i>
												</p>
											)}
										</div>

										{/* CITY */}
										<div className='col-span-6 sm:col-span-6 lg:col-span-2'>
											<label
												htmlFor='city'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Ciudad
											</label>
											<input
												type='text'
												name='city'
												id='city'
												value={input.city}
												autoComplete='address-level2'
												className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
											{errors?.city && (
												<p className=' text-red-500'>
													<i>{errors.city}</i>
												</p>
											)}
										</div>

										{/* REGION */}
										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='region'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Estado / Provincia
											</label>
											<input
												type='text'
												name='region'
												id='region'
												value={input.region}
												autoComplete='address-level1'
												className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
										</div>

										{/* POSTALCODE */}
										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='postalCode'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												ZIP / Código Postal
											</label>
											<input
												type='number'
												name='postalCode'
												id='postalCode'
												value={input.postalCode}
												autoComplete='postalCode'
												className=' indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-lighter-blue sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
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
											className='inline-flex justify-center rounded-md bg-lighter-blue py-2 px-3 text-lg font-semibold text-white shadow-sm hover:bg-darker-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-vlighter-blue'
										>
											Guardar
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
}
