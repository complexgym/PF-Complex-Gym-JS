import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTrainer } from '../../../../redux/actions/actions';

const TrainersCard = ({ trainer }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		swal({
			title: 'Querés borrar este/a entrenador/a?',
			text: 'Si es así, click en Ok',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((result) => {
			if (result) {
				dispatch(deleteTrainer(trainer.id));
				swal({
					title: 'Entrenador/a borrado!',
					icon: 'success',
				});
			} else {
				swal('Borrado descartado', '', 'info');
			}
		});
	};
	return (
		<tr>
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<div className="flex px-2 py-1">
					<div>
						<img
							src={trainer?.picture}
							className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
							alt="user"
						/>
					</div>
					<div className="flex flex-col justify-center">
						<h6 className="mb-0 text-sm leading-normal dark:text-white capitalize">
							{trainer?.name} {trainer?.lastName}
						</h6>
						<p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
							{trainer?.mail}
						</p>
					</div>
				</div>
			</td>
			<td className="px-2 py-3 text-left align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
					{trainer?.phone}
				</span>
			</td>
			<td className="px-2 py-3 text-left align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
					{trainer?.address}
				</span>
			</td>
			<td className="px-2 py-3 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400">
					<i
						class="fa fa-trash-can text-xl cursor-pointer w-8 mr-2 text-grey-500 hover:text-red-500"
						onClick={handleDelete}
					></i>
					{/* <i className="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60"></i> */}
				</button>
			</td>
		</tr>
	);
};

export default TrainersCard;
