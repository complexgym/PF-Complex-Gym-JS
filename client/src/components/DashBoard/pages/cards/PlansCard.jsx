import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePlan, editPlans, getAllPlans } from '../../../../redux/actions/actions';

const PlansCard = ({ plans }) => {
	const [data, setData] = useState({
		...plans,
		name: plans?.name,
		price: plans?.price,
		tags: plans?.tags,
	});

	const [editable, setEditable] = useState(false);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleClick = async () => {
		if (plans.name !== data.name || plans.price !== data.price) {
			dispatch(
				editPlans(plans?.id, {
					...data,
					tags: Array.isArray(data?.tags) ? data?.tags : data?.tags?.split(','),
				})
			);
			dispatch(getAllPlans());
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

	const handleDelete = () => {
		swal({
			title: 'Querés borrar este plan?',
			text: 'Si es así, click en Ok',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((result) => {
			if (result) {
				dispatch(deletePlan(plans.id));
				swal({
					title: 'Plan borrado!',
					icon: 'success',
				});
			} else {
				swal('Borrado descartado', '', 'info');
			}
		});
	};

	return (
		<tr>
			{/* plan name */}
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<p className="mb-0 text-left text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
					<input
						className={`border-none font-normal ${!editable && 'text-gray-500'}`}
						name="name"
						onChange={handleChange}
						type="text"
						value={data?.name}
						disabled={!editable}
					></input>
				</p>
			</td>

			{/* price */}
			<td className="p-2 flex items-center text-sm leading-normal text-left align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<input
					className={`border-none font-normal ${!editable && 'text-gray-500'}`}
					name="price"
					onChange={handleChange}
					type="number"
					value={data?.price}
					disabled={!editable}
				></input>
			</td>

			{/* tags */}
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<input
					className={`border-none font-normal w-64 ${!editable && 'text-gray-500'}`}
					name="tags"
					onChange={handleChange}
					type="text"
					value={data?.tags}
					disabled={!editable}
				></input>
			</td>

			{/* edit */}
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{editable ? (
					<i
						className="fa fa-check w-8 cursor-pointer mr-2 text-green-600"
						aria-hidden="true"
						onClick={() => setEditable(false)}
					></i>
				) : (
					<i
						className="fa fa-times text-sm cursor-pointer w-8 mr-2 text-red-500"
						aria-hidden="true"
						onClick={() => setEditable(true)}
					></i>
				)}
			</td>

			{/* send */}
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<button disabled={editable === false} onClick={handleClick}>
					<i
						className={`fa fa-paper-plane text-sm cursor-pointer ${
							!editable && 'text-gray-500 cursor-auto'
						}`}
						aria-hidden="true"
					></i>
				</button>
			</td>

			<td>
				<button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400">
					<i
						class="fa fa-trash-can text-xl cursor-pointer w-8 mr-2 text-grey-500 hover:text-red-500"
						onClick={handleDelete}
					></i>
					{/* <i className="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60"></i> */}
				</button>
			</td>
		</tr>
	);
};

export default PlansCard;
