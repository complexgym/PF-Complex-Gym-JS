import { dataPlans } from "../../assets/utils/dataPlans";
import { Link, NavLink } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import {useSelector} from "react-redux"
import { useState } from "react";

//todo ALL PLANS
export default function Plans() {
	const [option, setOption] = useState("Todos")

	const plans = useSelector(s=>s.plans)
  
	return (
		<div className="bg-image-testimonials relative w-full h-full pt-36 pb-8 font-text">
			<div className="absolute hidden w-full lg:block h-96" />
			
			<div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[85vw] md:px-24 lg:px-8 lg:py-20">
        {/* initial msg */}
				<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
					<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
						<span className="relative inline-block">
							<span className="relative uppercase text-white">Planes actuales</span>
						</span>{" "}
					</h2>
				</div>
        
        {/* content */}
				<div className="mb-4 border-b border-gray-200 dark:border-gray-700">

          {/* tabs */}
					<ul
						className="flex flex-wrap justify-center text-sm text-white font-medium text-center"
						id="myTab"
						data-tabs-toggle="#myTabContent"
						role="tablist"
					>
						<li className="mr-2" role="presentation">
							<button
								className={`inline-block p-4 border-b-2 rounded-t-lg ${option==="Todos" && "lighter-blue border-blue font-bold border-b-4"}`}
								onClick={()=>setOption("Todos")}
							>
								Todos
							</button>
						</li>

						<li className="mr-2" role="presentation">
							<button
								className={`inline-block p-4 border-b-2 rounded-t-lg ${option==="2 por semana" && "text-green-700 border-green-700 font-bold border-b-4"}`}
								onClick={()=>setOption("2 por semana")}
							>
								2 por semana
							</button>
						</li>

						<li className="mr-2" role="presentation">
							<button
								className={`inline-block p-4 border-b-2 rounded-t-lg ${option==="Libre" && "text-yellow-400 border-yellow-400 font-bold  border-b-4"}`}
								onClick={()=>setOption("Libre")}
							>
								Libre
							</button>
						</li>

						<li className="mr-2" role="presentation">
							<button
								className={`inline-block p-4 border-b-2 rounded-t-lg ${option==="Otros" && "text-slate-400 border-blue font-bold border-b-4"}`}
								onClick={()=>setOption("Otros")}
							>
								Otros
							</button>
						</li>

					</ul>
				</div>
				<div className="grid max-w-screen row-gap gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:mx-auto">
					{plans?.[option].map((plan) => {
						return <SinglePlan plan={plan} option={option}/>;
					})}
				</div>
			</div>
		</div>
	);
}

//todo PLAN CARD
function SinglePlan({ plan, option }) {
	return (
		<div className="flex flex-col justify-between transition-shadow duration-300 bg-white border rounded shadow-sm hover:shadow pb-8">
			<div className="text-center">
				<div className={`w-full pt-4 
				${option==="Libre" && "bg-yellow-400 text-black"}
				${option==="2 por semana" && "bg-green-700 text-white"}
				${option==="Otros" && "bg-slate-300 text-white"}
				${option==="Todos" && "bg-lighter-blue text-white"}
				`}>
					<div className="w-full text-lg font-semibold">{plan?.name}</div>
					<div className="w-full flex items-center justify-center mt-2">
						<div className="mr-1 text-5xl font-bold">
							<p className="pb-2">${plan?.price}</p>
						</div>
					</div>
				</div>
				<div className="mt-2 space-y-3 px-8 py-2">
					{plan?.tags?.map((tag) => {
						return (
							<div className="flex items-center">
								<i className={`fa fa-check mr-1
								${option==="Libre" && "text-yellow-400"}
								${option==="2 por semana" && "text-green-700"}
								${option==="Otros" && "text-slate-300"}
								${option==="Todos" && "lighter-blue"}`} aria-hidden="true"></i>
								<p className="text-gray-700">{tag}</p>
							</div>
						);
					})}
				</div>
			</div>
			<div className="w-full flex justify-center">
				<button className={`inline-flex items-center justify-center w-2/3 h-12 px-12 mt-6 font-medium tracking-wide transition duration-200 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none text-black
				${option==="Libre" && "bg-yellow-400 hover:bg-yellow-300 text-black"}
				${option==="2 por semana" && "bg-green-700 hover:bg-green-600 text-white"}
				${option==="Otros" && "bg-slate-300 hover:bg-slate-400 text-white"}
				${option==="Todos" && "bg-lighter-blue hover:bg-blue-400 text-white"}
				`}>
					Inscribirse
				</button>
			</div>
		</div>
	);
}

//todo PLAN FROM HOME
export function PlansHome() {

	const {plans} = useSelector(s=>s)

	return (
		<div className="relative w-[100vw] min-h-[190vh] md:min-h-[140vh] xl:min-h-screen">
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