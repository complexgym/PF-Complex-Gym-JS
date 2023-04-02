import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllAdmin,
	postAdmin,
	removeAdmin,
	deleteClient
} from "../../../../redux/actions/actions";

const ClientCard = ({ client }) => {
	const dispatch = useDispatch();
	const [seeAdmin, setSeeAdmin] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	const { user, name, lastName, picture } = client;

	const newClient = { user, name, lastName, picture, permits: [] };

	const { allAdmin } = useSelector((s) => s);

	useEffect(()=>{
		const find = allAdmin.find((a) => a.user === user);
		if (find) {
			setIsAdmin(true);
		}
	}, [])

	const handleAddAdmin = () => {
		dispatch(postAdmin(newClient));
		dispatch(getAllAdmin());
		setIsAdmin(true)
	};

	const handleRemoveAdmin = () => {
		const find = allAdmin?.find((a) => a.user === user);

		dispatch(removeAdmin(find?.id));

		dispatch(getAllAdmin());

		setIsAdmin(false)
	};

	function handleSeeIsAdmin(e) {
		e.preventDefault();
		setSeeAdmin(true);
		const find = allAdmin.find((a) => a.user === user);
		if (find) {
			setIsAdmin(true);
		}
	}

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
							src={client?.picture}
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
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
					Manager
				</p>
				<p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
					Undefined
				</p>
			</td>
			<td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{client?.active ? (
					<span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
						Activo
					</span>
				) : (
					<span className="bg-gradient-to-tl from-red-400 to-red-600 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
						Inactivo
					</span>
				)}
			</td>
			<td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
					{client?.age} / {client?.weight}kg / {client?.height}cm
				</span>
			</td>
			<td className="p-2 text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{!seeAdmin ? (
					<i
						className="fa fa-eye cursor-pointer lighter-blue"
						aria-hidden="true"
						onClick={handleSeeIsAdmin}
					></i>
				) : isAdmin ? (
					<i
						className="fa fa-check w-8 cursor-pointer mr-2 text-green-600"
						aria-hidden="true"
						onClick={handleRemoveAdmin}
					></i>
				) : (
					<i
						className="fa fa-times text-sm cursor-pointer w-8 mr-2 text-red-500"
						aria-hidden="true"
						onClick={handleAddAdmin}
					></i>
				)}
			</td>
			<td className="p-2 text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<i class="fa fa-trash-can text-xl cursor-pointer w-8 mr-2 text-grey-500 hover:text-red-500"
					onClick={handleDeactivate}
				></i>
			</td>
		</tr>
	);
};

export default ClientCard;
