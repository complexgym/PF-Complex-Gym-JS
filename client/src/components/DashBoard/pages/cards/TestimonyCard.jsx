import React from 'react';

const TestimonyCard = ({ testimony }) => {
	return (
		<tr>
			{/* IMAGE */}
			<td className='px-2 py-3 pl-4 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<img
					src={testimony?.url}
					className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl'
				/>
			</td>

			{/* NAME */}
			<td className='px-2 py-3 pl-11 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60 capitalize'>
					{testimony?.name}
				</p>
			</td>

			{/* TEXT*/}
			<td className='px-2 py-3 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60 capitalize'>
					{testimony?.text.substr(0, 49)}...
				</p>
			</td>

			{/* FAV */}
			<td className='px-2 py-3 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60 capitalize'>
					{testimony?.name}
				</p>
			</td>
		</tr>
	);
};

export default TestimonyCard;
