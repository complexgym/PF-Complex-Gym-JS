import React from 'react';

const ActivityCard = ({ activity }) => {
	return (
		<tr>
			<td className='px-2 py-3 pl-11 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<img
					src={activity?.image}
					className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
				/>
			</td>
			<td className='px-2 py-3 pl-11 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{activity?.name}
				</span>
			</td>
			<td className='px-2 py-3 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{activity?.description}
				</span>
			</td>
		</tr>
	);
};

export default ActivityCard;
