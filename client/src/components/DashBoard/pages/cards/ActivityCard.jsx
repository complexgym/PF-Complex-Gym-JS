import React from 'react';
import { deleteActivity} from '../../../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const ActivityCard = ({ activity }) => {
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(deleteActivity(activity.id));
	};


	return (
		<tr>
			{/* IMAGE */}
			<td className='px-2 py-3 pl-11 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<img
					src={activity?.image}
					className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
				/>
			</td>

			{/* NAME */}
			<td className='px-2 py-3 pl-11 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{activity?.name}
				</span>
			</td>

			{/* DESCRIPTION */}
			<td className='px-2 py-3 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{activity?.description}
				</span>
			</td>

			<td className='px-2 py-3 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<button className='inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400'>
					<img
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679368276/test_complex/gas3ewhonfe4sqiqcqyy.png'
						className='w-5'
						onClick={handleDelete}
					/>
					{/* <i className="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60"></i> */}
				</button>
			</td>
		</tr>
	);
};

export default ActivityCard;
