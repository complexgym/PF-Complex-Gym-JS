import { Link, Route, Routes, useLocation } from 'react-router-dom';
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

function App() {
	const location = useLocation();

	return (
		<div className='App'>
			{location.pathname !== '/' && <Navbar />}
			{location.pathname === '/' && <Link to='/home'>home</Link>}
			<Routes>
				<Route path={'/'} element={''} />
				<Route path={'/home'} element={<Home />} />
				<Route path={'/nosotros'} element={<About />} />
				<Route path={'/calendario'} element={<Calendar />} />
				<Route path={'/blog'} element={<Blog />} />
				<Route path={'/planes'} element={<Plans />} />
				<Route path={'/perfil'} element={<Profile />} />
				<Route path={'*'} element={<Error404 />} />
			</Routes>
			{location.pathname !== '/' && <Footer />}
		</div>
	);
}
export default App;
