import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Validate from "./Validations";
import { useAuth0 } from "@auth0/auth0-react";

export default function CreateBlog() {
	const dispatch = useDispatch();

	const { user } = useAuth0();

	const [input, setInput] = useState({
		title: "",
		content: "",
		blog_image: "",
		tags: [],
		author_name: "",
		author_image: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		if(e.target.name!=="tags"){
			setInput({
				...input,
				[e.target.name]: e.target.value,
			});
		}
		else{
			if(!input.tags.find(tag=>tag===e.target.value)){
				setInput({
					...input,
					tags: [...input.tags, e.target.value]
				});
			}
		}
		setErrors(
			Validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleRemoveTag = (tagRemove)=>{
		setInput({
			...input, 
			tags: input?.tags?.filter(tag=>{
				return tag!==tagRemove
			}
		)})
	}

	const handleSubmit = (e) => {
		// e.preventDefault();
		// setErrors(Validate(input));
		// let error = Validate(input);
		// if (Object.values(error).length !== 0) {
		// 	alert('Falta información obligatoria');
		// } else {
		// 	dispatch(postClient(input));
		// 	alert('¡Información actualizada correctamente!');
		// }
	};

	return (
		<>
			<div className=" relative pt-36 px-10 ">
				<div className="md:grid md:grid-cols-2 md:gap-6 justify-center">
					<div className="mt-5 md:col-span-2 md:mt-0">
						<div className="md:col-span-1">
							<div className="px-4 sm:px-0">
								<h3 className="text-base font-semibold leading-6 text-gray-900">
									Crea un blog!
								</h3>
							</div>
						</div>
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className="shadow sm:overflow-hidden sm:rounded-md">
								<div className="space-y-6 bg-white px-4 py-5 sm:p-6">
									{/* post title */}
									<div className="col-span-6 sm:col-span-3">
										<label
											htmlFor="title"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Título
										</label>
										<input
											type="text"
											name="title"
											id="title"
											value={input.title}
											required
											className=" indent-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											onChange={handleChange}
										/>
										{errors?.title && (
											<p className=" text-red-500">
												<i>{errors.title}</i>
											</p>
										)}
									</div>

									{/* post content */}
									<div className="col-span-6 sm:col-span-4">
										<label
											htmlFor="mail"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Contenido
										</label>
										<textarea
											id="content"
											name="content"
											value={input.content}
											rows={3}
											className="indent-2 mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
											placeholder="Mensaje del blog"
											defaultValue={""}
											onChange={handleChange}
										/>
										{errors?.content && (
											<p className=" text-red-500">
												<i>{errors.content}</i>
											</p>
										)}
									</div>

									{/* post  */}
									<div className="mr-4">
										<label
											htmlFor="tag"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Por tema
										</label>
										<select
											id="tags"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											name="tags"
											onChange={handleChange}
											value={
												input?.tags?.length > 0
													? input?.tags[input?.tags?.length - 1]
													: ""
											}
										>
											<option value="" selected>
												Seleccione una opción...
											</option>
											<option value="Fitness">Fitness</option>
											<option value="Entrenamiento">Entrenamiento</option>
											<option value="Salud">Salud</option>
											<option value="Administrativo">Administrativo</option>
										</select>

										<div className="flex">
											{input?.tags?.length>0 && 
											input?.tags?.map(tag=>{
												return( 
													<div className="flex mr-2 mt-4">
														<img className="w-5 h-5 mr-1 cursor-pointer" src="https://res.cloudinary.com/dpxucxgwg/image/upload/v1679262195/delete_2_nh2we5.png" onClick={()=>handleRemoveTag(tag)}/>
														<span>{tag}</span>
													</div>
												)
											})}
										</div>
									</div>

									{/* post image */}
									<div>
										<label className="block text-sm font-medium leading-6 text-gray-900">
											Imagen de fondo
										</label>
										<div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
											<div className="space-y-1 text-center">
												<svg
													className="mx-auto h-12 w-12 text-gray-400"
													stroke="currentColor"
													fill="none"
													viewBox="0 0 48 48"
													aria-hidden="true"
												>
													<path
														d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>

												<div className="flex text-sm text-gray-600">
													<label
														htmlFor="tag"
														className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
													>
														<span>Agregar un tag</span>
													</label>
													<p className="pl-1">o arrastrar y soltar</p>
												</div>

												<div className="flex text-sm text-gray-600">
													<label
														htmlFor="blog_image"
														className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
													>
														<span>Cargar un archivo</span>
														<input
															id="blog_image"
															name="blog_image"
															type="file"
															className="sr-only"
															// onChange={handleChange}
														/>
													</label>
													<p className="pl-1">o arrastrar y soltar</p>
												</div>
												<p className="text-xs text-gray-500">
													PNG, JPG, GIF up to 10MB
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="hidden sm:block" aria-hidden="true">
				<div className="py-5">
					<div className="border-t border-gray-200" />
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
