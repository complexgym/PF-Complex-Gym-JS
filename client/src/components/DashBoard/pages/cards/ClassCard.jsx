import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	deleteCalendar,
	getCalendar,
	putCalendar,
} from '../../../../redux/actions/actions';

const ClassCard = ({ calendar }) => {
	const dispatch = useDispatch();

	const [data, setData] = useState({
		...calendar,
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const [editable, setEditable] = useState(false);

	const handleDelete = () => {
		dispatch(deleteCalendar(calendar.id));
	};

	const handleClick = async () => {
		if (
			calendar.classes !== data.classes ||
			calendar.day !== data.day ||
			calendar.month !== data.month ||
			calendar.year !== data.year ||
			calendar.hour !== data.hour
		) {
			dispatch(
				putCalendar(calendar?.id, {
					...data,
				})
			);
			dispatch(getCalendar());
			swal({
				title: 'Gracias!',
				text: '¡Información editada correctamente!',
				icon: 'success',
			});
		} else {
			swal({
				title: 'Atención',
				text: '¡Debe editar al menos un campo!',
				icon: 'warning',
			});
		}
	};

	return (
		<tr>
			<td className='w-48 p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='w-48 text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
					<input
						className={`border-none font-normal w-48 text-center ${
							!editable && 'text-gray-500'
						}`}
						name='classes'
						onChange={handleChange}
						type='text'
						value={data?.classes}
						disabled={!editable}
					></input>
				</p>
			</td>
			<td className='w-48 p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='w-48 text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
					<input
						className={`border-none font-normal w-48 text-center ${
							!editable && 'text-gray-500'
						}`}
						name='day'
						onChange={handleChange}
						type='text'
						value={data?.day}
						disabled={!editable}
					></input>
				</p>
			</td>
			<td className='w-48 p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='w-48 text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
					<input
						className={`border-none font-normal w-48 text-center ${
							!editable && 'text-gray-500'
						}`}
						name='month'
						onChange={handleChange}
						type='text'
						value={data?.month}
						disabled={!editable}
					></input>
				</p>
			</td>
			<td className='w-48 p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='w-48 text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
					<input
						className={`border-none font-normal w-48 text-center ${
							!editable && 'text-gray-500'
						}`}
						name='year'
						onChange={handleChange}
						type='text'
						value={data?.year}
						disabled={!editable}
					></input>
				</p>
			</td>

			<td className='w-48 p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				<p className='w-48 text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
					<input
						className={`border-none font-normal w-48 text-center ${
							!editable && 'text-gray-500'
						}`}
						name='hour'
						onChange={handleChange}
						type='text'
						value={data?.hour}
						disabled={!editable}
					></input>
				</p>
			</td>

			{/* edit */}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center'>
				{editable ? (
					<i
						className='fa fa-check w-8 cursor-pointer mr-2 text-green-600'
						aria-hidden='true'
						onClick={() => setEditable(false)}
					></i>
				) : (
					<i
						className='fa fa-times text-sm cursor-pointer w-8 mr-2 text-red-500'
						aria-hidden='true'
						onClick={() => setEditable(true)}
					></i>
				)}
			</td>

			{/* send */}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center'>
				<button disabled={editable === false} onClick={handleClick}>
					<i
						className={`fa fa-paper-plane text-sm cursor-pointer ${
							!editable && 'text-gray-500 cursor-auto'
						}`}
						aria-hidden='true'
					></i>
				</button>
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

export default ClassCard;
