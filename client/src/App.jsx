import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Calendar from "./components/Calendar/Calendar";
import Error404 from "./components/Error404/Error404";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Plans from "./components/Plans/Plans";
import Profile from "./components/Profile/Profile";
import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllActivities,
	getAllPlans,
	getAllTestimonials,
	getAllClients,
	getAllPayments,
	getPaymentsByUser,
} from "./redux/actions/actions";
import Landing from "./components/Landing/Landing.jsx";
import BlogDetails from "./components/Blog/BlogDetails";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DashBoard from "./components/DashBoard/DashBoard";
import Clients from "./components/DashBoard/pages/Clients";
import ClientDetail from "./components/DashBoard/pages/ClientDetail";
import Publications from "./components/DashBoard/pages/Publications";
import Form from "./components/Form/Form";
import UpdateClient from "./components/Profile/UpdateClient/UpdateClient";
import ClasesCalendar from "./components/DashBoard/pages/ClassCalendar";
import Loading from "./components/Loading/Loading";
import Payments from "./components/DashBoard/pages/Payments";
import Activities from "./components/DashBoard/pages/Activities";
import Trainers from "./components/DashBoard/pages/Trainers";
import AllTestimonials from "./components/DashBoard/pages/AllTestimonials";
import AllPlans from "./components/DashBoard/pages/AllPlans";
import CreateReview from "./components/CreateReview/CreateReview";
import PaymentHistory from "./components/PaymentHistory/PaymentHistory";
import { getActualPlan } from "./redux/actions/actions";
import Devs from "./components/DEVS/Devs";
axios.defaults.baseURL = 'https://complex-api.onrender.com';
// axios.defaults.baseURL = "http://localhost:3001";

function App() {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [hasRedirected, setHasRedirected] = useState(false);
	const { user, isAuthenticated } = useAuth0();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		dispatch(getAllClients());
		dispatch(getAllActivities());
		dispatch(getAllPlans());
		dispatch(getAllTestimonials());
		dispatch(getAllPayments());

		setTimeout(() => {
			setIsLoaded(true);
		}, [2000]);
	}, [dispatch, isAuthenticated, navigate, hasRedirected]);

	const { allClients, allPayments } = useSelector((state) => state);
	console.log(allClients);

	let matchEmail = user && allClients.find((m) => m.mail === user.email);

	const matchId = matchEmail && matchEmail.id;

	let isAdmin = matchEmail?.admin;
	let isTrainer = matchEmail?.trainer;

	useEffect(() => {
		dispatch(getPaymentsByUser(matchId));
		dispatch(getActualPlan());
	}, [dispatch, allPayments, matchId]);

	const { pathname } = location;

	{
		/* we do not want to show nav and footer in blog 5 if it does not exist */
	}
	const { initial_posts } = useSelector((s) => s);
	const arrIDsBlogs = initial_posts?.map((blog) => "/blog/" + blog.id);

	{
		/* condition show nav and footer */
	}
	const boolAddComponent =
		pathname === "/home" ||
		pathname === "/nosotros" ||
		pathname === "/calendario" ||
		pathname === "/planes" ||
		pathname === "/perfil" ||
		pathname === "/historialDePagos" ||
		pathname === "/blog" ||
		arrIDsBlogs?.some((path) => path === pathname);

	return (
		<div className="App">
			{isLoaded ? (
				<>
					{boolAddComponent && <Navbar />}

					<Routes>
						<Route path={"/"} element={<Landing />} />
						<Route
							path={"/home"}
							element={<Home user={user} isAuthenticated={isAuthenticated} />}
						/>
						<Route path={"/nosotros"} element={<About />} />
						<Route path={"/calendario"} element={<Calendar />} />
						<Route path={"/blog"} element={<Blog />} />
						<Route path={"/blog/:id"} element={<BlogDetails />} />
						<Route path={"/blog/create"} element={<CreateBlog />} />
						<Route path={"/planes"} element={<Plans />} />
						<Route element={<PrivateRoute isAllowed={!!isAuthenticated} />}>
							<Route path={"/registro"} element={<Form />} />
							<Route path={"/perfil/:id"} element={<Profile />} />
							<Route path={"/editar/:id"} element={<UpdateClient />} />
						</Route>
						<Route
							element={
								<PrivateRoute isAllowed={!!isAuthenticated && (isAdmin || isTrainer)} />
							}
						>
							<Route path={"/dashboard"} element={<DashBoard />} />
							<Route path={"/dashboard/clientes"} element={<Clients />} />
							<Route path={"/dashboard/publicaciones"} element={<Publications />} />
							<Route path={"/dashboard/calendario"} element={<ClasesCalendar />} />
							{!allClients.error && allClients?.map(client=>{
								return <Route path={`/dashboard/perfil/${client?.id}`} element={<ClientDetail id={client?.id} />} />
							})}
							{isAdmin && (
								<>
									<Route path={"/dashboard/pagos"} element={<Payments />} />
									<Route path={"/dashboard/actividades"} element={<Activities />} />
									<Route path={"/dashboard/entrenadores"} element={<Trainers />} />
									<Route path={"/dashboard/testimonios"} element={<AllTestimonials />} />
									<Route path={"/dashboard/planes"} element={<AllPlans />} />
								</>
							)}
						</Route>
						<Route path={"/historialDePagos"} element={<PaymentHistory />} />
						<Route path={"/historialDePagos/:id"} element={<PaymentHistory />} />
						<Route path={"/review"} element={<CreateReview />} />
						<Route path={"*"} element={<Error404 />} />

						<Route exact path="/developers" element={<Devs />} />
					</Routes>

					{boolAddComponent && <Footer />}
				</>
			) : (
				<Loading />
			)}
		</div>
	);
}
export default App;
