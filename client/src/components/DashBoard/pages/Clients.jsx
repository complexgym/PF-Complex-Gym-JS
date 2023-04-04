import React, { useEffect, useState } from 'react';
import SideNav from '../SideNav';
import { useDispatch, useSelector } from 'react-redux';
import ClientCard from './cards/ClientCard';
import DeletedClientCard from './cards/DeletedClientCard';
import CloudinaryUploadPdf from '../../CloudinaryUploadImg/CloudinaryUploadPdf';
import {
	getAllClients,
	putClient,
	getDeletedClients,
} from '../../../redux/actions/actions';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const Clients = () => {
	const { allClients } = useSelector((s) => s);
	const { allDeletedClients } = useSelector((s) => s);
	const [clientId, setClientId] = useState('');
	const [newPdf, setNewPdf] = useState('');
	const { user } = useAuth0();
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	function handleUpload(pdf) {
		setNewPdf(pdf);
	}

	const allClientsNames = allClients?.map((client) => {
		return { name: client?.name + " " + client?.lastName, id: client?.id };
	});

	const split = newPdf.split(".");
	const fileExtension = split[split.length - 1];

	/* updating routine */
	const handleSubmitPDF = async () => {
		//*pdf exists
		if (newPdf) {
			//*client exists
			if (clientId) {
				//*extension pdf
				if (fileExtension === "pdf") {
					const response = await axios.put(`/clients/${clientId}`, {
						routine: newPdf,
					});
					dispatch(getAllClients());
					swal({
						title: "¡Listo!",
						text: "¡Rutina guardada correctamente!",
						icon: "success",
					});
				} else {
					swal({
						title: "¡Atención!",
						text: "¡Archivo debe ser extensión .pdf!",
						icon: "warning",
					});
				}
			} else {
				swal({
					title: "¡Atención!",
					text: "¡Debe seleccionar un cliente!",
					icon: "warning",
				});
			}
		} else {
			swal({
				title: "Falta Información",
				text: `Agregué un PDF por favor`,
				icon: "warning",
				dangerMode: true,
			});
		}
	};

	/* updating routine */
	const handleRemovePDF = async () => {
		//*pdf exists
		if (clientId) {
			const response = await axios.put(`/clients/${clientId}`, {
				routine: "",
			});
			swal({
				title: "¡Genial!",
				text: "¡Rutina eliminada éxitosamente!",
				icon: "success",
			});
		} else {
			swal({
				title: "¡Atención!",
				text: "¡Debe seleccionar un cliente!",
				icon: "warning",
			});
		}
	};

	const handleSearchDeleted = (e) => {
		e.preventDefault();
		const search = e.target;
		if (search) {
			dispatch(getDeletedClients());
		}
	};
	useEffect(() => {
		dispatch(getAllClients());
		dispatch(getDeletedClients());
		setTimeout(() => {
			setIsLoaded(true);
		}, [1000]);

	let matchEmail = user && allClients.find((m) => m.mail === user.email);

	let isUserAdmin = matchEmail?.admin;
	let isUserTrainer = matchEmail?.trainer;

	return (
		<div>
			<body
				className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default text-slate-500
			bg-blue-500 min-h-screen"
			>
				<div className="w-full h-full bg-blue-500 dark:hidden"></div>

				<SideNav />

				<main className="relative h-full transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
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
										Clientes
									</li>
								</ol>
								<h6 className="mb-0 font-bold text-white capitalize">Clientes</h6>
							</nav>
						</div>
					</nav>

					<div className="w-full px-6 py-6 mx-auto">
						<div className="flex flex-wrap -mx-3">
							<div className="flex-none w-full max-w-full px-3">
								<div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
									<div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
										<h6 className="dark:text-white">Tabla Clientes</h6>
									</div>
									<div className="flex-auto px-0 pt-0 pb-2">
										<div className="p-0 overflow-x-auto">
											<table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
												<thead className="align-bottom">
													<tr>
														<th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 text-sm opacity-70">
															Cliente
														</th>
														<th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 text-sm opacity-70">
															Perfil
														</th>
														<th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70">
															Información
														</th>
														{/* <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70">
															Estado
														</th> */}
														<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-sm border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
															Edad / Peso / Estatura
														</th>

														{isUserAdmin && 
															<>
																<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-sm border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
																¿Es admin?
															</th>

															<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-sm border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
																¿Es trainer?
															</th>

															<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-sm border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
																Desactivar
															</th>
														</>}
													</tr>
												</thead>
												<tbody>
													{allClients.map((client) => {
														return <ClientCard client={client} isUserAdmin={isUserAdmin} />;
													})}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* SUBMIT PDF */}
						{isUserTrainer && <div
							className="w-full xl:w-[50vw] mb-16
						rounded-screen bg-white py-10 px-4 rounded-2xl"
						>
							<p className="text-center">Subir PDF a alumno</p>
							<div className=" flex flex-col md:flex-row items-center justify-center">
								<select
									className="flex w-54 my-6
								bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
									onChange={(e) => setClientId(e.target.value)}
								>
									<option>Seleccione un alumno...</option>
									{allClientsNames?.map((client) => {
										return <option value={client?.id}>{client?.name}</option>;
									})}
								</select>
								<CloudinaryUploadPdf onUpload={handleUpload} />
							</div>
							<div className="flex justify-center">
								<button
									type="button"
									class="text-white bg-blue-700 
									hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
									font-medium rounded-lg text-xs mr-2 mb-2 
									dark:bg-blue-600 dark:hover:bg-blue-700 
									focus:outline-none dark:focus:ring-blue-800 first-letter
									py-2 px-8 mt-10 md:mt-0 flex items-center"
									onClick={handleRemovePDF}
								>
									Eliminar PDF <br></br>
									a cliente
								</button>
								<button
									type="button"
									class="text-white bg-blue-700 
									hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
									font-medium rounded-lg text-sm mr-2 mb-2 
									dark:bg-blue-600 dark:hover:bg-blue-700 
									focus:outline-none dark:focus:ring-blue-800 first-letter
									py-2 px-8 mt-10 md:mt-0 flex items-center"
									onClick={handleSubmitPDF}
								>
									Enviar
								</button>
							</div>
						</div>}
						
						{isUserAdmin && <div className="flex flex-wrap -mx-3">
							<div className="flex-none w-full max-w-full px-3">
								<div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
									<div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
										<h6 className="dark:text-white">Clientes desactivados</h6>
										<button
											name="search"
											type="button"
											class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 first-letter py-2 px-8 mt-10 md:mt-0 flex items-center"
											onClick={handleSearchDeleted}
										>
											Buscar
										</button>
									</div>
									<div className="flex-auto px-0 pt-0 pb-2">
										<div className="p-0 overflow-x-auto">
											<table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
												<thead className="align-bottom">
													<tr>
														<th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 text-sm opacity-70">
															Cliente
														</th>
														<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-sm border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
															Reactivar
														</th>
													</tr>
												</thead>
												<tbody>
													{allDeletedClients?.map((client) => {
														return <DeletedClientCard client={client} />;
													})}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>}
					</div>
				</main>
			</body>
		</div>
	);
};

export default Clients;
