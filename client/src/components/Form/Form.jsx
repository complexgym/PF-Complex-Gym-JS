export default function Form() {
	return (
		<>
			<div className=' relative'>
				<div className='md:grid md:grid-cols-3 md:gap-6'>
					<div className='md:col-span-1'>
						<div className='px-4 sm:px-0'>
							<h3 className='text-base font-semibold leading-6 text-gray-900'>Perfil</h3>
							<p className='mt-1 text-sm text-gray-600'>
								Esta información se mostrará públicamente, así que ten cuidado con lo que
								compartes.
							</p>
						</div>
					</div>
					<div className='mt-5 md:col-span-2 md:mt-0'>
						<form action='#' method='POST'>
							<div className='shadow sm:overflow-hidden sm:rounded-md'>
								<div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
									<div className='col-span-6 sm:col-span-3'>
										<label
											htmlFor='first-name'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Nombre de usuario
										</label>
										<input
											type='text'
											name='username'
											id='username'
											autoComplete='given-name'
											className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>

									<div className='col-span-6 sm:col-span-4'>
										<label
											htmlFor='email'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Correo electrónico
										</label>
										<input
											type='text'
											name='email'
											id='email'
											autoComplete='email'
											className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>

									<div>
										<label className='block text-sm font-medium leading-6 text-gray-900'>
											Foto
										</label>
										<div className='mt-2 flex items-center'>
											<span className='inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
												<svg
													className='h-full w-full text-gray-300'
													fill='currentColor'
													viewBox='0 0 24 24'
												>
													<path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
												</svg>
											</span>
											<button
												type='button'
												className='ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50'
											>
												Cambiar
											</button>
										</div>
									</div>

									<div>
										<label className='block text-sm font-medium leading-6 text-gray-900'>
											Foto de portada
										</label>
										<div className='mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
											<div className='space-y-1 text-center'>
												<svg
													className='mx-auto h-12 w-12 text-gray-400'
													stroke='currentColor'
													fill='none'
													viewBox='0 0 48 48'
													aria-hidden='true'
												>
													<path
														d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
														strokeWidth={2}
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
												<div className='flex text-sm text-gray-600'>
													<label
														htmlFor='file-upload'
														className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
													>
														<span>Cargar un archivo</span>
														<input
															id='file-upload'
															name='file-upload'
															type='file'
															className='sr-only'
														/>
													</label>
													<p className='pl-1'>o arrastrar y soltar</p>
												</div>
												<p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
											</div>
										</div>
									</div>

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
												rows={3}
												className='mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6'
												placeholder='you@example.com'
												defaultValue={''}
											/>
										</div>
										<p className='mt-2 text-sm text-gray-500'>
											Breve descripción de su perfil. URL con hipervínculos.
										</p>
									</div>
								</div>
								<div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
									<button
										type='submit'
										className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
									>
										Guardar
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

			<div className='mt-10 sm:mt-0'>
				<div className='md:grid md:grid-cols-3 md:gap-6'>
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
					<div className='mt-5 md:col-span-2 md:mt-0'>
						<form action='#' method='POST'>
							<div className='overflow-hidden shadow sm:rounded-md'>
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
												autoComplete='given-name'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='last-name'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Apellido
											</label>
											<input
												type='text'
												name='last-name'
												id='last-name'
												autoComplete='family-name'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											/>
										</div>

										{/* <div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='country'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Country
											</label>
											<select
												id='country'
												name='country'
												autoComplete='country-name'
												className='mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											>
												<option>United States</option>
												<option>Canada</option>
												<option>Mexico</option>
											</select>
										</div> */}

										<div className='col-span-6 sm:col-span-6 lg:col-span-2'>
											<label
												htmlFor='age'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Edad
											</label>
											<input
												type='text'
												name='age'
												id='age'
												autoComplete='age'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='weight'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Peso
											</label>
											<input
												type='text'
												name='weight'
												id='weight'
												autoComplete='weight'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='height'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Altura
											</label>
											<input
												type='text'
												name='height'
												id='height'
												autoComplete='height'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											/>
										</div>

										<div className='col-span-6'>
											<label
												htmlFor='street-address'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Dirección
											</label>
											<input
												type='text'
												name='street-address'
												id='street-address'
												autoComplete='street-address'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											/>
										</div>

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
												autoComplete='address-level2'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											/>
										</div>

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
												autoComplete='address-level1'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='postal-code'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												ZIP / Código Postal
											</label>
											<input
												type='text'
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											/>
										</div>
									</div>
								</div>
								<div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
									<button
										type='submit'
										className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
									>
										Guardar
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

			{/* 	<div className='mt-10 sm:mt-0'>
				<div className='md:grid md:grid-cols-3 md:gap-6'>
					<div className='md:col-span-1'>
						<div className='px-4 sm:px-0'>
							<h3 className='text-base font-semibold leading-6 text-gray-900'>
								Notifications
							</h3>
							<p className='mt-1 text-sm text-gray-600'>
								Decide which communications you'd like to receive and how.
							</p>
						</div>
					</div>
					<div className='mt-5 md:col-span-2 md:mt-0'>
						<form action='#' method='POST'>
							<div className='overflow-hidden shadow sm:rounded-md'>
								<div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
									<fieldset>
										<legend className='sr-only'>By Email</legend>
										<div
											className='text-sm font-semibold leading-6 text-gray-900'
											aria-hidden='true'
										>
											By Email
										</div>
										<div className='mt-4 space-y-4'>
											<div className='flex items-start'>
												<div className='flex h-6 items-center'>
													<input
														id='comments'
														name='comments'
														type='checkbox'
														className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
													/>
												</div>
												<div className='ml-3 text-sm leading-6'>
													<label htmlFor='comments' className='font-medium text-gray-900'>
														Comments
													</label>
													<p className='text-gray-500'>
														Get notified when someones posts a comment on a posting.
													</p>
												</div>
											</div>
											<div className='flex items-start'>
												<div className='flex h-6 items-center'>
													<input
														id='candidates'
														name='candidates'
														type='checkbox'
														className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
													/>
												</div>
												<div className='ml-3 text-sm leading-6'>
													<label
														htmlFor='candidates'
														className='font-medium text-gray-900'
													>
														Candidates
													</label>
													<p className='text-gray-500'>
														Get notified when a candidate applies for a job.
													</p>
												</div>
											</div>
											<div className='flex items-start'>
												<div className='flex h-6 items-center'>
													<input
														id='offers'
														name='offers'
														type='checkbox'
														className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
													/>
												</div>
												<div className='ml-3 text-sm leading-6'>
													<label htmlFor='offers' className='font-medium text-gray-900'>
														Offers
													</label>
													<p className='text-gray-500'>
														Get notified when a candidate accepts or rejects an offer.
													</p>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className='contents text-sm font-semibold leading-6 text-gray-900'>
											Push Notifications
										</legend>
										<p className='text-sm text-gray-500'>
											These are delivered via SMS to your mobile phone.
										</p>
										<div className='mt-4 space-y-4'>
											<div className='flex items-center'>
												<input
													id='push-everything'
													name='push-notifications'
													type='radio'
													className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
												/>
												<label
													htmlFor='push-everything'
													className='ml-3 block text-sm font-medium leading-6 text-gray-900'
												>
													Everything
												</label>
											</div>
											<div className='flex items-center'>
												<input
													id='push-email'
													name='push-notifications'
													type='radio'
													className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
												/>
												<label
													htmlFor='push-email'
													className='ml-3 block text-sm font-medium leading-6 text-gray-900'
												>
													Same as email
												</label>
											</div>
											<div className='flex items-center'>
												<input
													id='push-nothing'
													name='push-notifications'
													type='radio'
													className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
												/>
												<label
													htmlFor='push-nothing'
													className='ml-3 block text-sm font-medium leading-6 text-gray-900'
												>
													No push notifications
												</label>
											</div>
										</div>
									</fieldset>
								</div>
								<div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
									<button
										type='submit'
										className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
									>
										Save
									</button>
								</div>
							</div>
						</form>
					</div> 
				</div>
			</div>*/}
		</>
	);
}
