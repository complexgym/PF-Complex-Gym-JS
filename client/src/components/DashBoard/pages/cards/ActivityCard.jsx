import React from 'react';
import { deleteActivity } from '../../../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import ReadMoreButton from '../../../ReadMoreButton/ReadMoreButton';

const ActivityCard = ({ activity }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		swal({
			title: 'Querés borrar esta actividad?',
			text: 'Si es así, click en Ok',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((result) => {
			if (result) {
				dispatch(deleteActivity(activity.id));
				swal({
					title: 'Actividad borrada!',
					icon: 'success',
				});
			} else {
				swal('Borrado descartado', '', 'info');
			}
		});
	};

	return (
		<tr>
			{/* IMAGE */}
			<td className="px-2 py-3 pl-11 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<img
					src={activity?.image}
					className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
				/>
			</td>

			{/* NAME */}
			<td className="px-2 py-3 pl-11 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
					{activity?.name}
				</span>
			</td>

			{/* DESCRIPTION */}
			<td className="px-2 py-3 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
					<ReadMoreButton text={activity?.description} maxChars={50} />
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

export default ActivityCard;
