import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Spline from "@splinetool/react-spline";

//todo PLAN FROM HOME
export default function PlansHome() {

	const {plans} = useSelector(s=>s)

	return (
		<div className=" bg-slate-700 relative w-[100vw] 2xl:h-[100vh] xl:h-[100vh] lg:h-[100vh] md:h-[108vh] xs:h-[220vh]">
			<div className="absolute w-[100%] h-[100%]">
				<Spline scene="https://prod.spline.design/jxjOOkSio3UDciBE/scene.splinecode" />
			</div>
			<div className="absolute left-1/2 transform -translate-x-1/2 z-10 2xl:my-40 xl:my-16 lg:my-20 md:my-20 xs:my-16">
				<Link to="/planes" className="">
					<a className="text-white font-text font-bold 2xl-max:text-5xl 2xl:text-5xl xl:text-4xl lg:text-5xl md:text-4xl xs:text-4xl">PLANES</a>
				</Link>
			</div>
			<div
				className="absolute  w-[85vw] left-1/2 transform mx-auto -translate-x-1/2 my-32 cards pt-20 pb-32 grid  2xl:grid-cols-3 2xl:mt-[25vh] xl:grid-cols-3  xl:mt-[80px] md:mt-[70px] xs:mt-[70px] md:grid-cols-2 "
			>
				{plans && Object?.entries(plans)?.slice(0, 3)?.map((d, index) => {
					return (
						<div
							className="card text-grey text-md rounded-xl bg-white m-auto pb-10 2xl:w-[400px] xl:w-[25vw] lg:mb-20 lg:w-[350px] md:mb-10 md:w-[38vw] xs:mb-10 xs:w-[100%]"
							key={index}
						>
							{/* running bg TEXT */}
							<div className="absolute bg-black z-10"></div>
							<label className="name-plan text-2xl absolute z-50 ml-4 mt-4 text-black font-semibold uppercase">
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

							<div className="pl-4 pt-8 h-56 flex flex-col justify-between ">
								<h3 className="msg-text text-lg w-10/12 pt-2 font-bold text-[#1D459D]">
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

								<div className="flex ">
									{/* <button className="text-[#04209A] border-slate-300-plans mt-4"> */}
									<NavLink
										to="/planes"
										className="bg-[#1D459D] hover:bg-blue-300 text-white font-bold py-2 px-4 border rounded mt-4"
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