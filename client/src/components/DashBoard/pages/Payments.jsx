import SideNav from "../SideNav";
import { useDispatch, useSelector } from "react-redux";
import PaymentCard from "./cards/PaymentCard";
import { useState } from "react";
import {
	getAllPayments,
	postPaymentCash,
} from "../../../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";

const Payments = () => {
	const [data, setData] = useState({
		clientId: "",
		status: "",
		total_amount: "",
		date_payments: "",
		plans: "",
	});

	const { allPayments, initial_plans, allClients } = useSelector((s) => s);

	const dispatch = useDispatch();

	const plansName = initial_plans?.map((plan) => plan);

	/* all clients name for select student */
	const allClientsNames = allClients?.map((client) => {
		return { name: client?.name + " " + client?.lastName, id: client?.id };
	});

	/* onchange client */
	const handleChangeClient = (e) => {
		setData({
			...data,
			clientId: e.target.value,
		});
	};

	/* onchange plan */
	const handleChangePlan = (e) => {
		initial_plans.forEach((plan) => {
			if (plan?.name === e.target.value) {
				setData({
					...data,
					plans: e.target.value,
					total_amount: plan?.price,
				});
			}
		});
	};

	/* submit payment */
	const handleSubmitPayment = async (e) => {
		e.preventDefault();

		const filter = allPayments?.filter((pay) => {
			return pay?.clientId === data?.clientId;
		});

		const lastPay = filter[filter.length - 1];

		if (lastPay) {
			let { paymentsDateStamp, finishedDateStamp } = lastPay;
			let today = new Date();
			let start = new Date(paymentsDateStamp);
			let end = new Date(finishedDateStamp);

			//*user already has a plan
			if (today > start && today < end) {
				swal({
					title: "Usuario ya tiene plan!",
					text: `El usuario ya tiene el plan ${lastPay?.plansPayments} que vence el ${lastPay?.finishedDate}`,
					icon: "warning",
				});
			}
			//*the plan is elder
			else {
				let newData = {
					...data,
					date_payments: new Date().toISOString(),
					status: "approved",
				};

				dispatch(postPaymentCash(newData));

				dispatch(getAllPayments());

				swal({
					title: "Gracias!",
					text: "¡Información creada correctamente!",
					icon: "success",
				});
			}
		} else {
			let newData = {
				...data,
				date_payments: new Date().toISOString(),
				status: "approved",
			};

			dispatch(postPaymentCash(newData));

			dispatch(getAllPayments());

			swal({
				title: "Gracias!",
				text: "¡Información creada correctamente!",
				icon: "success",
			});
		}
	};

	return (
		<div>
			<body
				className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default text-slate-500
			bg-blue-500 min-h-screen"
			>
				<div className="w-full h-full bg-blue-500 dark:hidden"></div>

				<SideNav />

				<main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
					{/* <!-- Navbar --> */}
					<nav
						className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
						navbar-main
						navbar-scroll="false"
					>
						<div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
							<nav>
								{/* <!-- breadcrumb --> */}
								<ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
									<li className="text-sm leading-normal">
										<a className="text-white opacity-50" href="javascript:;">
											Paginas
										</a>
									</li>
									<li
										className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
										aria-current="page"
									>
										Pagos
									</li>
								</ol>
								<h6 className="mb-0 font-bold text-white capitalize">Pagos</h6>
							</nav>
						</div>
					</nav>

					<div className="w-full px-6 py-6 mx-auto">
						<div className="flex flex-wrap -mx-3">
							<div className="flex-none w-full max-w-full px-3">
								{/* form */}
								<form
									onSubmit={handleSubmitPayment}
									className="py-10 px-10 mt-4 gap-8
									bg-white rounded-xl mb-8"
								>
									<div className="border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
										<h6 className="dark:text-white">Carga de pagos en efectivo</h6>
									</div>
									{/* client */}
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
										<div className="my-6 w-full">
											<label className="font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
												Alumno
											</label>
											<select
												className="flex w-full md:w-54
											bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-0 md:mr-4"
												onChange={handleChangeClient}
												value={data.clientId}
											>
												<option value="">Seleccione un alumno...</option>
												{allClientsNames?.map((client) => {
													return <option value={client?.id}>{client?.name}</option>;
												})}
											</select>
										</div>

										{/* plan */}
										<div className="w-full">
											<label className="font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-s border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
												Plan
											</label>
											<select
												className="flex w-full md:w-54
											bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
												onChange={handleChangePlan}
											>
												<option>Seleccione un plan...</option>
												{plansName?.map((client) => {
													return <option value={client?.name}>{client?.name}</option>;
												})}
											</select>
										</div>
										<div className="w-full">
											<button
												type="submit"
												className="inline-block ml-4 w-full md:w-32 h-12 py-2 px-4 mb-0 font-bold text-white capitalize shadow-sm fill-current bg-blue-500 rounded-xl relative right-4 md:right-0 mt-8"
											>
												Crear pago
											</button>
										</div>
									</div>
								</form>
								<div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
									<div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
										<h6 className="dark:text-white">Tabla Clientes</h6>
									</div>
									<div className="flex-auto px-0 pt-0 pb-2">
										<div className="p-0 overflow-x-auto">
											<table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
												<thead className="align-bottom">
													<tr>
														<th className="px-6 text-center py-3 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 text-sm opacity-70">
															Cliente
														</th>
														<th className="px-6 text-center py-3 pl-2 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70">
															Plan
														</th>
														<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70">
															Pago
														</th>
														<th className="px-6 text-center py-3 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 text-sm opacity-70">
															Forma de pago
														</th>
														<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70">
															Fecha
														</th>
														<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70">
															Hora
														</th>
														<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70">
															Fin plan
														</th>
														{/* delete */}
														<th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-sm text-slate-400 opacity-70">
															<span>¿Borrar? </span><br></br>
															<small>(efectivo)</small>
														</th>
													</tr>
												</thead>
												<tbody>
													{allPayments?.map((payment) => {
														let clientName = allClientsNames.find((el) => {
															return el?.id === payment?.clientId;
														});

														return (
															<PaymentCard payment={payment} clientName={clientName?.name} />
														);
													})}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</body>
		</div>
	);
};

export default Payments;
//