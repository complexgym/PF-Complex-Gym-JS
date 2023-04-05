import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
	getAllPayments,
	getClientDetail,
	getPaymentsByUser,
	deleteClient,
	getAllClients,
} from "../../../redux/actions/actions";
import image from "../../../assets/img/dumbelldBgd.jpg";
import swal from "sweetalert";

const regexImg = /\.(jpeg|jpg|gif|png)$/;

export default function ClientDetail({id}) {
	const client = useSelector( (state)=>state.clientDetail )
	const {allClients} = useSelector(s=>s)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getClientDetail(id));
	}, [dispatch, id]);

	const handleNoPdf = (e) => {
		swal({
			title: "No tenés una rutina asignada!",
			icon: "info",
			button: "Volver",
		  });
	}

	const { actual_plan } = useSelector((state) => state);

	return (
		<div className="profile-page">
			<section className="relative block h-500-px">
				<div
					class="absolute top-0 w-full h-full  bg-center bg-cover"
					style={{
						backgroundImage: `url(${image})`,
					}}
				>
					<span
						id="blackOverlay"
						className="w-full h-full absolute opacity-50 bg-black"
					></span>
				</div>
				<div
					className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
					style={{ transform: "translateZ(0px)" }}
				>
					<svg
						className="absolute bottom-0 overflow-hidden"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
					>
						<polygon
							className="text-blueGray-200 fill-current"
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div>
			</section>
			<section className="relative py-16 bg-blueGray-200">
				<div className="container mx-auto px-4">
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
						<div className="px-6">
							<div className="flex flex-wrap justify-center">
								<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
									<div className="relative">
										<img
											alt="..."
											src={regexImg.test(client?.picture) ? client?.picture : "https://res.cloudinary.com/dpxucxgwg/image/upload/v1679450694/anonimo_uim8xm.png"}
											className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
										/>
									</div>
								</div>
								<div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
									
								</div>
								<div className="w-full lg:w-4/12 px-4 lg:order-1">
									<div className="flex justify-center py-4 lg:pt-4 pt-8">
										<div className="mr-4 p-3 text-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
												{client?.age}
											</span>
											<span className="text-sm text-blueGray-400">Edad</span>
										</div>
										<div className="mr-4 p-3 text-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
												{client?.weight}
											</span>
											<span className="text-sm text-blueGray-400">Peso</span>
										</div>
										<div className="lg:mr-4 p-3 text-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
												{client?.height}
											</span>
											<span className="text-sm text-blueGray-400">Estatura</span>
										</div>
									</div>
								</div>
							</div>
							<div className="text-center mt-12">
								<h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
									{`${client?.name} ${client?.lastName}`}
								</h3>
								<h4 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
									{client?.user}
								</h4>
								<h4 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
									<i className="fas fa-envelope  mr-2 text-lg text-blueGray-400"></i>
									{client?.mail}
								</h4>
								<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
									<i className="fas fa-id-card  mr-2 text-lg text-blueGray-400"></i>
									{client?.dni}
								</div>
								<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
									<i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
									{client?.phone}
								</div>
								<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
									<i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
									{`${client?.city}, ${client?.region}`}
								</div>
								<div className="mb-2 text-blueGray-600 mt-10">
									<i className="fas fa-solid fa-location-arrow mr-2 text-lg text-blueGray-400"></i>{" "}
									{client?.address}
								</div>
								<div className="mb-2 text-blueGray-600">
									<i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
									{client?.postalCode}
								</div>
							</div>
							<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
								<div className="flex flex-wrap justify-center">
									<div className="w-full lg:w-9/12 px-4">
										<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
											{client?.about}
										</p>
									</div>
								</div>

								{/* showing or not routine */}
								<div className="flex justify-center gap-4 mt-4">
									{client?.routine ? (
										<div>
											<button className="inline-flex justify-center rounded-md bg-lighter-blue py-2 px-3 text-md font-semibold text-white shadow-sm hover:bg-darker-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-vlighter-blue">
												<a href={client?.routine}
													target="_blank">
													Última Rutina
												</a>
											</button>
										</div>
									) : (
										<div>
											<button onClick={handleNoPdf}
											className="inline-flex justify-center rounded-md bg-off py-2 px-3 text-md font-semibold text-white shadow-sm hover:bg-darker-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-vlighter-blue">
												Última Rutina
											</button>
										</div>
									)}

									{/* showing payment history */}
									<div>
										<button	className="inline-flex justify-center rounded-md bg-lighter-blue py-2 px-3 text-md font-semibold text-white shadow-sm hover:bg-darker-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-vlighter-blue"
										>
										<a href={"/historialDePagos"}>Historial de pagos</a>
										</button>
									</div>
								</div>

								{/* current plan */}
								{actual_plan?.status==="active" ? <div className="mt-8">
									<p>
										Plan {actual_plan?.plansPayments}, vence el {actual_plan?.finishedDate}
									</p>
								</div>
								: <p className="mt-8 underline">El/la cliente no está inscripto a ningún plan</p>}
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center">
					<Link
						to="/dashboard/clientes"
						className="inline-flex justify-center rounded-md bg-lighter-blue py-2 px-3 text-lg font-semibold text-white shadow-sm hover:bg-darker-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-vlighter-blue"
					>
						Volver
					</Link>
				</div>
			</section>
		</div>
	);
}