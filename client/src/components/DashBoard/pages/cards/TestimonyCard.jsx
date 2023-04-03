import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTestimonials, putTestimonials } from '../../../../redux/actions/actions';
import ReadMoreButton from '../../../ReadMoreButton/ReadMoreButton';

const TestimonyCard = ({ testimony }) => {
	const dispatch = useDispatch();

	const [data, setData] = useState({
		url: testimony?.url,
		name: testimony?.name,
		review: testimony?.review,
		fav: testimony?.fav,
		rate: testimony?.rate,
	});

	const handleFav = (id) => {
		const review = testimony;
		setData({
			...review,
			fav: !review.fav,
		});
		dispatch(
			putTestimonials(id, {
				...review,
				fav: !review.fav,
			})
		);
		setTimeout(() => {
			dispatch(getAllTestimonials());
		}, 200);
	};

	return (
		<tr>
			{/* IMAGE */}
			<td className='px-2 py-3 pl-4 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<img
					src={
						testimony?.url
							? testimony?.url
							: 'https://res.cloudinary.com/dpxucxgwg/image/upload/v1679450694/anonimo_uim8xm.png'
					}
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
					<ReadMoreButton text={testimony?.review} maxChars={20} />
				</p>
			</td>

			{/* FAV */}
			<td className='px-2 py-3 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<button className='w-full' onClick={() => handleFav(testimony.id)}>
					{testimony?.fav ? (
						<i
							className='fa fa-check w-8 cursor-pointer text-green-600'
							aria-hidden='true'
						></i>
					) : (
						<i
							className='fa fa-times cursor-pointer w-8 text-red-500'
							aria-hidden='true'
						></i>
					)}
				</button>
			</td>
		</tr>
	);
};

export default TestimonyCard;
//
