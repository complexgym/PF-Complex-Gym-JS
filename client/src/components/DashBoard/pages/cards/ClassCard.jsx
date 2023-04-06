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
	const [sendMsgEditable, setSendMsgEditable] = useState(false);

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const [editable, setEditable] = useState(false);

	const handleDelete = () => {
		swal({
			title: "Querés borrar esta clase?",
			text: "Si es así, click en Ok",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((result) => {
			if (result) {
				dispatch(deleteCalendar(calendar.id));
				swal({
					title: "Clase borrada!",
					icon: "success",
				});
			} else {
				swal("Borrado descartado", "", "info");
			}
		});
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

	const handleChangeEditable = () => {
		setEditable(prev=>!prev)

		if(!sendMsgEditable) {
			setSendMsgEditable(true) //showing only once the msg

			swal({
				title: '¡Información del editado!',
				icon: 'info',
				text: '¡Para editar, debe cambiar al menos una palabra o frase de su izquierda, y apretar el botón enviar a su derecha!',
			});
		}
	}

	return (
		<tr>
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent grid">
				<p className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
					<input
						className={`w-full text-center outline-0 border-none font-normal ${
							editable ? 'border-input-dash rounded-xl' : 'text-gray-500'
						}`}
						name="classes"
						onChange={handleChange}
						type="text"
						value={data?.classes}
						disabled={!editable}
					></input>
				</p>
			</td>
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<p className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
					<input
						className={`w-full text-center outline-0 border-none font-normal ${
							editable ? 'border-input-dash rounded-xl' : 'text-gray-500'
						}`}
						name="day"
						onChange={handleChange}
						type="text"
						value={data?.day}
						disabled={!editable}
					></input>
				</p>
			</td>
			<td className="align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<p className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
					<input
						className={`w-full text-center outline-0 border-none font-normal ${
							editable ? 'border-input-dash rounded-xl' : 'text-gray-500'
						}`}
						name="month"
						onChange={handleChange}
						type="text"
						value={data?.month}
						disabled={!editable}
					></input>
				</p>
			</td>
			<td className="align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<p className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
					<input
						className={`ml-2 mr-2 w-full text-center outline-0 border-none font-normal ${
							editable ? 'border-input-dash rounded-xl' : 'text-gray-500'
						}`}
						name="year"
						onChange={handleChange}
						type="text"
						value={data?.year}
						disabled={!editable}
					></input>
				</p>
			</td>

			<td className="align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<p className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
					<input
						className={`w-11/12 ml-4 text-center outline-0 border-none font-normal ${
							editable ? 'border-input-dash rounded-xl' : 'text-gray-500'
						}`}
						name="hour"
						onChange={handleChange}
						type="text"
						value={data?.hour}
						disabled={!editable}
					></input>
				</p>
			</td>

			{/* edit */}
			<td className="align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent ">
				{editable ? (
					<i
						className="fa fa-check cursor-pointer text-green-600 w-full text-center"
						aria-hidden="true"
						onClick={() => handleChangeEditable()}
					></i>
				) : (
					<i
						className="fa fa-times text-sm cursor-pointer text-red-500 w-full text-center"
						aria-hidden="true"
						onClick={() => handleChangeEditable()}
					></i>
				)}
			</td>

			{/* send */}
			<td className="align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent ">
				<button className="w-full" disabled={editable === false} onClick={handleClick}>
					<i
						className={`fa fa-paper-plane text-sm cursor-pointer w-full text-center${
							!editable && 'text-gray-500 cursor-auto'
						}`}
						aria-hidden="true"
					></i>
				</button>
			</td>

			<td className="align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<button className="w-full inline-block font-bold  uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400">
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

export default ClassCard;
