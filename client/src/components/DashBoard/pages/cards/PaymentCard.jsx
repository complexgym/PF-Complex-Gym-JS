import { useDispatch } from "react-redux";
import { deletePaymentCash, getAllPayments } from "../../../../redux/actions/actions";

const PaymentCard = ({ payment, clientName }) => {
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(deletePaymentCash(payment?.paymentsId))
		dispatch(getAllPayments())
	}
	return (
		<tr>
			{/* client name/id */}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				{/* {payment.picture && <img src={payment?.picture} alt="profile image"/>} */}
				<p className='mb-0 text-center text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
					{clientName}
				</p>
			</td>
		
			{/* plan */}
			<td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				{payment?.plansPayments}
			</td>

			{/* price */}
			<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				${payment?.paymentsAmount}
			</td>

			{/* payment type */}
			<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				{payment?.id?.length>8 ? "Mercado Pago" : "Efectivo"}
			</td>

			{/* payment date */}
			<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				{payment?.paymentsDate ? payment?.paymentsDate : "No se sabe"}
			</td>

			{/* payment hour */}
			<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				{payment?.hour ? payment?.hour : "No se sabe"}
			</td>

      {/* end's date */}	
			<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				{payment?.finishedDate ? payment?.finishedDate : "No se sabe"}
			</td>

			{/* delete */}	
			<td className='p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				{payment?.paymentsId?.toString()?.length < 9
				&& <button className='inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400'>
					<img
						src="https://res.cloudinary.com/dpxucxgwg/image/upload/v1679368276/test_complex/gas3ewhonfe4sqiqcqyy.png"
						className='w-5'
						onClick={handleDelete}
					/>
				</button>}
			</td>
		</tr>
	);
};

export default PaymentCard