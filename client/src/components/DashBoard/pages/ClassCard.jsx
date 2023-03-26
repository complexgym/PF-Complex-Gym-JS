import React from 'react';

const ClassCard = ({ calendar }) => {
	return (
		<tr>
			<td className='px-6 py-3 pl-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{calendar?.class}
				</span>
			</td>
			<td className='px-6 py-3 pl-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{calendar?.day} / {calendar?.month} / {calendar?.year}
				</span>
			</td>
			<td className='px-6 py-3 pl-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{calendar?.hour}
				</span>
			</td>
			<td className='px-6 py-3 pl-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<button className='inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400'>
					<i className='fa fa-times mr-4 text-red-500' aria-hidden='true'></i>
				</button>
			</td>
		</tr>
	);
};

export default ClassCard;
