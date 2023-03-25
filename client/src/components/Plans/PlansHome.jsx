import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Spline from "@splinetool/react-spline";

//todo PLAN FROM HOME
export default function PlansHome() {

	const {plans} = useSelector(s=>s)

	return (
		<div className="relative w-[100vw] min-h-[190vh] md:min-h-[150vh] xl:min-h-screen">
			<div className="absolute w-[100%] h-[99%]">
				<Spline scene="https://prod.spline.design/jxjOOkSio3UDciBE/scene.splinecode" />
			</div>
			<div className="absolute left-1/2 transform -translate-x-1/2 z-10 my-20">
				<Link to="/planes" className="">
					<a className=" text-white text-5xl font-bold mt-20">PLANES</a>
				</Link>
			</div>
			<div
				className="absolute left-1/2 transform -translate-x-1/2 my-32 cards pt-20 pb-32 grid md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto w-[80vw] sm:w-[60vh]
			md:w-[85vw] xl:w-[75vw] 2xl:w-[65vw] "
			>
				{plans && Object?.entries(plans)?.slice(0, 3)?.map((d, index) => {
					return (
						<div
							className="card text-grey text-md rounded-xl bg-white pb-10"
							key={index}
						>
							{/* running bg TEXT */}
							<div className="absolute bg-black z-10"></div>
							<label className="name-plan text-2xl absolute z-50 ml-3 text-black uppercase">
								{d?.[0]}
							</label>

							{/* running bg */}
							<div
								style={{
									backgroundImage:
										"url('https://runkeeper.com/cms/wp-content/uploads/sites/4/2022/12/How-Many-Days-Per-Week-Should-You-Run.png')",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
								className="w-full h-48 rounded-tr-xl rounded-tl-xl bg-gray-img"
							></div>

							{/* msg text depending the plan section */}

							<div className="pl-2 pt-8 h-56 flex flex-col justify-between">
								<h3 className="msg-text text-lg w-10/12 pt-2 font-bold text-[#04209A]">
									{d[0] === "2 por semana" && "¡Más accesible!"}

									{d[0] === "Libre" && "¡De Lunes a Sábado lo que quieras!"}

									{d[0] === "Otros" && "¡De Lunes a Sábado sólo una actividad!"}
								</h3>

								<ul className="flex flex-col justify-between list-disc">
									{d[1].map((s, index) => {
										return (
											<li className="ml-8">
												{s?.name} (${s?.price})
											</li>
										);
									})}
								</ul>

								<div className="flex">
									{/* <button className="text-[#04209A] border-slate-300-plans mt-4"> */}
									<NavLink
										to="/planes"
										className="bg-blue-600 hover:bg-blue-300 text-white font-bold py-2 px-4 border rounded mt-4"
									>
										Inscribirse
									</NavLink>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}