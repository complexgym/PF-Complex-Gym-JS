import { dataPlans } from "../../assets/utils/dataPlans";

export default function Plans() {
	return (
		<div className="cards bg-image-plans">
			<div className="cards pt-36 pb-24 grid md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto w-[80vw] sm:w-[60vh]
			md:w-[85vw] xl:w-[75vw] 2xl:w-[65vw]">
				{dataPlans.map((d, index) => {
					return (
						<div
							className="card text-white text-md rounded-xl bg-card-image-plans pb-10"
							key={index}
						>
							{/* running bg TEXT */}
							<div className="absolute bg-black z-10"></div>
							<label className="name-plan text-2xl absolute z-50 ml-3 text-black uppercase">
								{d[0]}
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
								<h3 className="msg-text text-lg w-10/12 pt-2 font-bold font-lighter-blue-plans">
									{d[0] === "2 por semana" && "¡Más barato!"}

									{d[0] === "Libre" && "¡De Lunes a Sábado lo que quieras!"}

									{d[0] === "Otros" && "¡De Lunes a Sábado sólo una actividad!"}
								</h3>

								<form className="flex flex-col justify-between" >
									{d[1].map((s, index) => {
										return (
											<div key={index}>
												<input
													type="checkbox"
													name={s.plan}
													value={s.plan}
													id=""
													className=""
												/>
												<label className="pl-2">
													{s.plan} (${s.price})
												</label>
											</div>
										);
									})}
								</form>

								<div className="flex">
									<button className="font-lighter-blue-plans border-lighter-blue-plans mt-4">Inscribirse</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
