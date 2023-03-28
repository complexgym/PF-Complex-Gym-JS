import React from 'react';

const TestimonyCard = ({ testimony }) => {
	return (
		<tr>
			{/* client */}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60 capitalize'>
					{testimony?.client}
				</p>
			</td>

			{/* title */}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60 capitalize'>
					{testimony?.title}
				</p>
			</td>

			{/* description*/}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60 capitalize'>
					{testimony?.description}
				</p>
			</td>

			{/* qualification*/}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60 capitalize'>
					{testimony?.qualification}
				</p>
			</td>
		</tr>
	);
};

export default TestimonyCard;
