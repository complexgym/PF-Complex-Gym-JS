import React from 'react';

const PlansCard = ({ plan }) => {
	return (
		<tr>
			{/* plan */}
			<td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				{plan?.title}
			</td>

			{/* price */}
			<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				${plan?.price}
			</td>

			{/* date */}
			<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				{plan?.activities}
			</td>
		</tr>
	);
};

export default PlansCard;
