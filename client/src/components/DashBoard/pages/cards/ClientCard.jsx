import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
	getAllAdmin,
	postAdmin,
	removeAdmin,
	deleteClient,
	putClient,
	getAllClients
} from "../../../../redux/actions/actions";

const regexImg = /\.(jpeg|jpg|gif|png)$/;

const ClientCard = ({ client, isUserAdmin }) => {
	const dispatch = useDispatch();
	// const [seeAdmin, setSeeAdmin] = useState(false);
	const [isClientAdmin, setIsClientAdmin] = useState(client?.admin);
	const [isClientTrainer, setIsClientTrainer] = useState(client?.trainer);

	const handleAddAdmin = async () => {
		dispatch(putClient({...client, admin: true}, client?.id))
		setIsClientAdmin(prev=>!prev)
	};

	const handleRemoveAdmin = async () => {
		dispatch(putClient({...client, admin: false}, client?.id))
		setIsClientAdmin(prev=>!prev)
	};

	const handleAddTrainer = async () => {
    dispatch(putClient({...client, trainer: true}, client?.id))
    setIsClientTrainer(prev=>!prev)
  };

	const handleRemoveTrainer = async () => {
    dispatch(putClient({...client, trainer: false}, client?.id))
    setIsClientTrainer(prev=>!prev)
  };

	const handleDeactivate= () =>{
		swal({
			title: "Querés desactivar esta cuenta?",
			text: "Si es así, click en Ok",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((result) => {
			if (result) {
				dispatch(deleteClient(client.id));
				swal({
					title: "Cuenta desactivada!",
					icon: "success",
				});
			} else {
				swal("Desactivación descartada", "", "info");
			}
		});
	};


	return (
		<tr>
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<div className="flex px-2 py-1">
					<div>
						<img
							src={regexImg.test(client?.picture) ? client?.picture : "https://res.cloudinary.com/dpxucxgwg/image/upload/v1679450694/anonimo_uim8xm.png"}
							className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
							alt="user"
						/>
					</div>
					<div className="flex flex-col justify-center">
						<h6 className="mb-0 text-sm leading-normal dark:text-white capitalize">
							{client?.name} {client?.lastName}
						</h6>
						<p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
							{client?.mail}
						</p>
					</div>
				</div>
			</td>
			<td className="p-2 text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<Link to={`/dashboard/perfil/${client?.id}`}>
					<i class="fa fa-light fa-user text-xl cursor-pointer w-8 mr-2 text-grey-500 hover:lighter-blue"></i>
				</Link>
			</td>
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
					{!isClientAdmin && !isClientTrainer && "Cliente"}
					{isClientAdmin && !isClientTrainer && "Administrador"}
					{isClientTrainer && !isClientAdmin && "Entrenador"}
					{isClientAdmin && isClientTrainer && "Administrador y entrenador"}
				</p>
			</td>
			{/* <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{client?.active ? (
					<span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
						Activo
					</span>
				) : (
					<span className="bg-gradient-to-tl from-red-400 to-red-600 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
						Inactivo
					</span>
				)}
			</td> */}
			<td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
					{client?.age} / {client?.weight}kg / {client?.height}cm
				</span>
			</td>
			{isUserAdmin && 
			<>
			<td className="p-2 text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{isClientAdmin ? 
					<i
						className="fa fa-check w-8 cursor-pointer mr-2 text-green-600"
						aria-hidden="true"
						onClick={handleRemoveAdmin}
					></i>
				: 
					<i
						className="fa fa-times text-sm cursor-pointer w-8 mr-2 text-red-500"
						aria-hidden="true"
						onClick={handleAddAdmin}
					></i>
				}
			</td>
			<td className="p-2 text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{isClientTrainer ? 
					<i
						className="fa fa-check w-8 cursor-pointer mr-2 text-green-600"
						aria-hidden="true"
						onClick={handleRemoveTrainer}
					></i>
				: 
					<i
						className="fa fa-times text-sm cursor-pointer w-8 mr-2 text-red-500"
						aria-hidden="true"
						onClick={handleAddTrainer}
					></i>
				}
			</td>
			<td className="p-2 text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<i class="fa fa-trash-can text-xl cursor-pointer w-8 mr-2 text-grey-500 hover:text-red-500"
					onClick={handleDeactivate}
				></i>
			</td>
			</>}
		</tr>
	);
};

export default ClientCard;
