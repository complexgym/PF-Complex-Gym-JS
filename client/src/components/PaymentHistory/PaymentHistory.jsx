import { useDispatch, useSelector } from "react-redux";
import { getAllPayments, getPaymentsByUser } from "../../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PaymentHistory() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	const { user } = useAuth0();

	const { allClients } = useSelector((state) => state);

	let matchEmail = user && allClients.find((m) => m.mail === user.email);

	const matchId = matchEmail && matchEmail.id;

	useEffect(() => {
		// dispatch(getAllPayments());

		setTimeout(() => {
			setIsLoaded(true);
		}, [2000]);
	}, [dispatch]);

	// const { allPayments } = useSelector((state) => state);

	// useEffect(() => {
	// 	dispatch(getPaymentsByUser(allPayments, matchId));
	// }, [dispatch, allPayments, matchId]);

	const { payments_user } = useSelector((state) => state);

	return (
		<div className="my-12 min-h-[60vh] w-full justify-center items-center">
			<h1
				className="text-center mb-4 px-6 py-3 pl-2 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-lg lighter-blue text-slate-400 opacity-70 underline
      pt-24"
			>
				Tu historial de pagos
			</h1>

			{isLoaded ? (
				payments_user?.length > 0 ? (
					<table
						className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500
      h-full"
					>
						<thead className="align-bottom">
							<tr>
								<th className="px-6 text-center py-3 pl-2 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70 text-xs md:text-lg">
									Plan
								</th>
								<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70 text-xs md:text-lg">
									Pago
								</th>

								<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70 text-xs md:text-lg">
									Fecha
								</th>

								<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowraptext-slate-400 opacity-70 text-xs md:text-lg">
									Fin plan
								</th>
							</tr>
						</thead>
						<tbody>
							{payments_user?.map((pay, index) => {
								return (
									<tr key={index} className="font-text">
										{/* payments name */}
										<td className="py-3">
											<p className="mb-0 text-center text-xs md:text-lg leading-tight dark:text-white dark:opacity-80">
												{pay?.plansPayments}
											</p>
										</td>

										{/* payments price */}
										<td>
											<p className="mb-0 text-center text-xs md:text-lg leading-tight dark:text-white dark:opacity-80">
											{pay?.paymentsAmount ? "$" + pay?.paymentsAmount : "No registrado"}
											</p>
										</td>

										{/* payments date */}
										<td>
											<p className="mb-0 text-center text-xs md:text-lg leading-tight dark:text-white dark:opacity-80">
												{pay?.paymentsDate ? pay?.paymentsDate : "No se sabe"}
											</p>
										</td>

										{/* plan's end */}
										<td className="mb-0 text-center text-xs md:text-lg leading-tight dark:text-white dark:opacity-80">
											{pay?.finishedDate ? pay?.finishedDate : "No se sabe"}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				) : (
					<h1 className="text-center">No ha comprado planes todavía</h1>
				)
			) : (
				<div className="text-center">
					<LoadingPayment />
				</div>
			)}

			<div className="flex justify-center mt-8">
				<Link
					to={`/perfil/${matchId}`}
					className="inline-flex justify-center rounded-md bg-lighter-blue py-2 px-3 text-lg font-semibold text-white shadow-sm hover:bg-darker-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-vlighter-blue"
				>
					Volver
				</Link>
			</div>
		</div>
	);
}

function LoadingPayment() {
	return (
		<div role="status">
			<svg
				aria-hidden="true"
				className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="currentColor"
				/>
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="currentFill"
				/>
			</svg>
			<span className="sr-only">Loading...</span>
		</div>
	);
}
