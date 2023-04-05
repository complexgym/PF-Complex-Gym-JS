import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	restoreClient,
	getDeletedClients,
	getAllClients
} from "../../../../redux/actions/actions";

const DeletedClientCard = ({ client }) => {
	
	const [updateCounter, setUpdateCounter] = useState(0);
	const dispatch = useDispatch();

	const handleReactivate= () =>{
		swal({
			title: "Querés reactivar esta cuenta?",
			text: "Si es así, click en Ok",
			icon: "warning",
			buttons: true,
			dangerMode: false,
		}).then((result) => {
			if (result) {
				dispatch(restoreClient(client.id));
				swal({
					title: "Cuenta reactivada!",
					icon: "success",
				});
				setUpdateCounter(prevState => prevState + 1);
			} else {
				swal("Reactivación descartada", "", "info");
			}
		});
	};

	useEffect(() => {
		dispatch(getDeletedClients());
		dispatch(getAllClients());
	}, [updateCounter]);

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
		
			<td className="p-2 text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<i class="fa-solid fa-user-plus text-xl cursor-pointer w-8 mr-2 text-grey-500 hover:text-green-500"
									onClick={handleReactivate}
				></i>
			</td>
		</tr>
	);
};

export default DeletedClientCard;
