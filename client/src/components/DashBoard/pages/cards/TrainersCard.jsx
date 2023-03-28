import React from 'react';

const TrainersCard = ({ trainer }) => {
	return (
		<tr>
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<div className='flex px-2 py-1'>
					<div>
						<img
							src={trainer?.picture}
							className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
							alt='user'
						/>
					</div>
					<div className='flex flex-col justify-center'>
						<h6 className='mb-0 text-sm leading-normal dark:text-white capitalize'>
							{trainer?.name} {trainer?.lastName}
						</h6>
						<p className='mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400'>
							{trainer?.mail}
						</p>
					</div>
				</div>
			</td>
			<td className='px-2 py-3 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{trainer?.age} / {trainer?.weight}kg / {trainer?.height}cm
				</span>
			</td>
			<td className='px-2 py-3 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<span className='text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400'>
					{trainer?.phone}
				</span>
			</td>
		</tr>
	);
};

export default TrainersCard;
