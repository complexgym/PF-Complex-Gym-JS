const PaymentCard = ({ payment }) => {
	return (
		<tr>
			{/* client name/id */}
			<td className='p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent'>
				{/* {payment.picture && <img src={payment?.picture} alt="profile image"/>} */}
				<p className='mb-0 text-center text-xs font-semibold leading-tight dark:text-white dark:opacity-80'>
					{payment?.clientName}
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
		</tr>
	);
};

export default PaymentCard