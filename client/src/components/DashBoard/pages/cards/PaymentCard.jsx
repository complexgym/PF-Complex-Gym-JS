import { useDispatch } from 'react-redux';
import {
	deletePaymentCash,
	getActualPlan,
	getAllPayments,
} from '../../../../redux/actions/actions';

const PaymentCard = ({ payment, clientName }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		swal({
			title: 'Querés borrar este pago en efectivo?',
			text: 'Si es así, click en Ok',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((result) => {
			if (result) {
				dispatch(deletePaymentCash(payment?.paymentsId));
				swal({
					title: 'Pago en efectivo borrado!',
					icon: 'success',
				});
			} else {
				swal('Borrado descartado', '', 'info');
			}
		});

		dispatch(getAllPayments());
		dispatch(getActualPlan());
	};

	return (
		<tr>
			{/* client name/id */}
			<td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<p className="mb-0 text-center text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
					{clientName ? clientName : "Cliente deshabilitado"}
				</p>
			</td>

			{/* plan */}
			<td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{payment?.plansPayments}
			</td>

			{/* price */}
			<td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{payment?.paymentsAmount ? '$' + payment?.paymentsAmount : 'No registrado'}
			</td>

			{/* payment type */}
			<td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{payment?.paymentsId?.toString()?.length < 10 ? 'Efectivo' : 'Mercado Pago'}
			</td>

			{/* payment date */}
			<td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{payment?.paymentsDate ? payment?.paymentsDate : 'No se sabe'}
			</td>

			{/* payment hour */}
			<td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{payment?.hour ? payment?.hour : 'No se sabe'}
			</td>

			{/* end's date */}
			<td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{payment?.finishedDate ? payment?.finishedDate : 'No se sabe'}
			</td>

			{/* delete, only in cash payments */}
			<td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				{payment?.paymentsId?.toString()?.length < 10 && (
					<button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400">
						<i
							class="fa fa-trash-can text-xl cursor-pointer w-8 mr-2 text-grey-500 hover:text-red-500"
							onClick={handleDelete}
						></i>
					</button>
				)}
			</td>
		</tr>
	);
};

export default PaymentCard;
