import React from 'react';

const ClassCard = ({ calendar }) => {
	return (
		<tr>
			<td className='px-2 py-3 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{calendar?.class}
				</span>
			</td>
			<td className='px-2 py-3 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{calendar?.day} / {calendar?.month} / {calendar?.year}
				</span>
			</td>
			<td className='px-2 py-3 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{calendar?.hour}
				</span>
			</td>
		</tr>
	);
};

export default ClassCard;
