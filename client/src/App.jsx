import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Calendar from './components/Calendar/Calendar';
import Error404 from './components/Error404/Error404';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Plans from './components/Plans/Plans';
import Profile from './components/Profile/Profile';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAllActivities,
	getAllPlans,
	getAllPosts,
	getAllTestimonials,
} from './redux/actions/actions';
import Landing from './components/Landing/Landing.jsx';
import BlogDetails from './components/Blog/BlogDetails';
import CreateBlog from './components/CreateBlog/CreateBlog';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DashBoard from './components/DashBoard/DashBoard';
import Clients from './components/DashBoard/pages/Clients';
import Publications from './components/DashBoard/pages/Publications';
import Form from './components/Form/Form';
import UpdateClient from './components/Profile/UpdateClient/UpdateClient';

axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [hasRedirected, setHasRedirected] = useState(false);
	const { user, isAuthenticated } = useAuth0();

	useEffect(() => {
		dispatch(getAllPosts());
		dispatch(getAllTestimonials());
		dispatch(getAllActivities());
		dispatch(getAllPlans());

		// if (isAuthenticated && !hasRedirected) {
		// 	navigate('/home');
		// 	setHasRedirected(true);
		// }
	}, [dispatch, isAuthenticated, navigate, hasRedirected]);

	const { pathname } = location;

	{
		/* we do not want to show nav and footer in blog 5 if it does not exist */
	}
	const { initial_posts } = useSelector((s) => s);
	const arrIDsBlogs = initial_posts.map((blog) => '/blog/' + blog.id);

	{
		/* condition show nav and footer */
	}
	const boolAddComponent =
		pathname === '/home' ||
		pathname === '/nosotros' ||
		pathname === '/calendario' ||
		pathname === '/planes' ||
		pathname === '/perfil' ||
		pathname === '/blog' ||
		arrIDsBlogs.some((path) => path === pathname) ||
		pathname === '/blog/create';

	return (
		<div className='App'>
			{boolAddComponent && <Navbar />}

			<Routes>
				<Route path={'/'} element={<Landing />} />
				<Route path={'/home'} element={<Home />} />
				<Route path={'/nosotros'} element={<About />} />
				<Route path={'/calendario'} element={<Calendar />} />
				<Route path={'/blog'} element={<Blog />} />
				<Route path={'/blog/:id'} element={<BlogDetails />} />
				<Route path={'/blog/create'} element={<CreateBlog />} />
				<Route path={'/planes'} element={<Plans />} />
				<Route element={<PrivateRoute isAllowed={!!isAuthenticated} />}>
					<Route path={'/registro'} element={<Form />} />
					<Route path={'/perfil/:id'} element={<Profile />} />
					<Route path={'/editar/:id'} element={<UpdateClient />} />
				</Route>
				<Route element={<PrivateRoute isAllowed={!!isAuthenticated} />}>
					<Route path={'/dashboard'} element={<DashBoard />} />
					<Route path={'/dashboard/clientes'} element={<Clients />} />
					<Route path={'/dashboard/publicaciones'} element={<Publications />} />
				</Route>
				<Route path={'*'} element={<Error404 />} />
			</Routes>

			{boolAddComponent && <Footer />}
		</div>
	);
}
export default App;
