import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { postPayment } from "../../redux/actions/actions";

//todo PLAN CARD
export default function SinglePlan({ plan, option }) {

	const {user} = useAuth0()

	const dispatch = useDispatch()

	const allClient = useSelector((state) => state.allClients);

	let matchEmail = user && allClient.find((m) => m.mail === user.email);

	const isActive = matchEmail && matchEmail.active;

	const matchId = matchEmail && matchEmail.id;

	const [purchase, setPurchase] = useState({
		category_id: matchId, //id user
		title: `Compra del plan ${plan?.name}`, 
		unit_price: plan?.price, 
		quantity: 1,
	})

	const handleSubmit = async (e)=> {
		e.preventDefault()
		dispatch(postPayment(purchase))
	}

	return (
		<form onSubmit={handleSubmit}
		className="flex flex-col justify-between transition-shadow duration-300 bg-white border rounded shadow-sm hover:shadow pb-8">
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
				<button type="submit"
				className={`inline-flex items-center justify-center w-2/3 h-12 px-12 mt-6 font-medium tracking-wide transition duration-200 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none text-black
				${option==="Libre" && "bg-yellow-400 hover:bg-yellow-300 text-black"}
				${option==="2 por semana" && "bg-green-700 hover:bg-green-600 text-white"}
				${option==="Otros" && "bg-slate-300 hover:bg-slate-400 text-white"}
				${option==="Todos" && "bg-lighter-blue hover:bg-blue-400 text-white"}
				`}>
					Inscribirse
				</button>
			</div>
		</form>
	);
}