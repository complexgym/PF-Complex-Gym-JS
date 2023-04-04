import { useDispatch, useSelector } from 'react-redux';
import {
	filterPosts,
	getAllPosts,
	searchPosts,
	updateFilters,
	updateSearch,
} from '../../redux/actions/actions';
import { useEffect, useState } from 'react';
import InstagramPost from './InstaPost';
import SingleBlog from './SingleBlog';
import { LoadingBlog } from '../Loading/Loading';

//todo blog container
export default function Blog() {
	const dispatch = useDispatch();
	let { initial_posts, matched_posts, ig_posts, search_blog, filters_blog } =
		useSelector((s) => s);
	const [search, setSearch] = useState('');
	const [filters, setFilters] = useState({ tag: '', date: '' });
	const [isLoaded, setIsLoaded] = useState(true);

	//* search
	const handleChangeSearch = (e) => {
		setSearch(e.target.value);
		dispatch(updateSearch(e.target.value));
		dispatch(filterPosts(filters, e.target.value));
	};

	useEffect(()=>{
		dispatch(getAllPosts());
	}, [dispatch])

	//*change filters!!!
	const handleChangeFilters = (e) => {
		setIsLoaded(false)
		setFilters({
			...filters,
			[e.target.name]: e.target.value,
		});
		dispatch(
			updateFilters({
				...filters,
				[e.target.name]: e.target.value,
			})
		);
		dispatch(filterPosts({
			...filters,
			[e.target.name]: e.target.value,
		}, search_blog));

		setTimeout(() => {
			setIsLoaded(true);
		}, [1500]);
	};

	//*clear filter!!!
	const handleClearFilters = (e) => {
		e.preventDefault();
		setIsLoaded(false)
		setFilters({ tag: '', date: '' });
		setSearch('');
		dispatch(updateSearch(''));
		dispatch(updateFilters({ tag: '', date: '' }));
		dispatch(getAllPosts());
		setTimeout(() => {
			setIsLoaded(true);
		}, [1500]);
	};

	filters_blog = useSelector((s) => s.filters_blog);

	search_blog  = useSelector((s) => s.search_blog);

	// useEffect(()=>{
	// 	if(!search_blog && !Object.values(filters_blog).find(el=>el!=="")){
	// 		dispatch(getAllPosts());
	// 	}
	// }, [search_blog, filters])


	return (
		<div>
			<section className='bg-gray-100 w-screen pt-8 min-h-[80vh]'>
				{initial_posts?.length !== 0 ? (
					<div className='pb-8 px-4 mx-auto max-w-screen 2xl:max-w-[90vw] lg:pb-8 lg:px-6 '>
						{/* BLOG */}
						<div className='mx-auto max-w-screen-sm text-center lg:mb-8 mb-4'>
							<h2 className='mb-4 font-text font-extrabold drop-shadow-xl text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white'>
								Nuestro Blog
							</h2>
						</div>

						{/* FORM: Search and filters */}
						<form className='form-blog mb-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:w-[60vw] lg:w-[70%] xl:w-[50%] 2xl:w-[55%] w-[80vw] gap-6 mx-auto'>
							{/* SEARCH */}
							<div className='mr-4 w-full'>
								<label
									for='search'
									className='block py-3 font-text font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 text-sm opacity-70'
								>
									Búsqueda por título
								</label>
								<input
									type='text'
									id='search'
									onChange={handleChangeSearch}
									value={search_blog}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-gray-700'
									placeholder='5 ejercicios para tonificar'
								/>
							</div>

							{/* FILTER BY TAG */}
							<div className='mr-4 w-full'>
								<label
									for='tag'
									className='block py-3 font-text font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 text-sm opacity-70'
								>
									Por tema
								</label>
								<select
									id='tag'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									name='tag'
									onChange={handleChangeFilters}
									value={filters_blog?.tag}
								>
									<option value='' selected>
										Seleccione una opción...
									</option>
									<option value='Fitness'>Fitness</option>
									<option value='Entrenamiento'>Entrenamiento</option>
									<option value='Salud'>Salud</option>
									<option value='Administrativo'>Administrativo</option>
								</select>
							</div>

							{/* ORDER BY DATE */}
							<div className='mr-4 w-full'>
								<label
									for='per_date'
									className='block py-3 font-text font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 text-sm opacity-70'
								>
									Orden por fecha
								</label>
								<select
									id='per_date'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									name='date'
									value={filters_blog.date}
									onChange={handleChangeFilters}
								>
									<option value='' selected>
										Seleccione una opción...
									</option>
									<option value='recent'>Más nuevos</option>
									<option value='ancient'>Más antiguos</option>
								</select>
							</div>

							{/* CLEAR FILTERS */}
							<button
								onClick={handleClearFilters}
								className='text-left underline uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 text-sm opacity-70
							'
							>
								Borrar filtros
							</button>
						</form>

						{/* posts, can be initial posts, filtered, or searched posts */}
						{matched_posts?.length > 0 ? (
							//get more than 1 post
							
								isLoaded ? <div className='cards grid gap-0 gap-y-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 py-8'>
								{matched_posts?.map((b, index) => {
									return <SingleBlog key={index} blog={b} />;
								}) }
								</div>
								: <LoadingBlog />
							
						) : (
							//get null posts
							isLoaded && (
								<div className='flex flex-col items-center pt-0 pb-4'>
									{/* <img
									src={
										'https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196370/not-found-blog_ly0lcw.png'
									}
									alt='not found img'
									className='w-[150px] md:w-[250px] rounded-xl'
								/> */}
									<p className='text-[#0a0093] text-lg font-text font-bold flex flex-col align-middle items-center pb-4'>
										<img src="https://res.cloudinary.com/dpxucxgwg/image/upload/v1680613422/cara_triste-removebg-preview_eosuso.png" alt="cara triste"
										className='mb-4'/>
										{search_blog
											? 'Perdón, ¡ningún blog cumple la condición!'
											: 'Ningún blog encontrado!'}
									</p>
								</div>
							)
						)}

						{/* REDES */}
						<div className='mx-auto max-w-screen-sm text-center mt-4 lg:mb-8 mb-4'>
							<h2 className='mb-4 font-text font-extrabold drop-shadow-xl text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white'>
								Nuestras redes
							</h2>
						</div>

						<div
							className='grid gap-0 gap-y-10 lg:grid-cols-2 xl:grid-cols-3 
					2xl:grid-cols-4 py-8'
						>
							{ig_posts.map((post) => {
								return <InstagramPost url={post?.image} />;
							})}
						</div>
					</div>
				) : (
					<p className='text-red-500 font-bold text-center'>
						¡Ningún blog todavía creado!
					</p>
				)}
			</section>
		</div>
	);
}

//*https://sugarshin.github.io/react-instagram-embed/

//*https://developers.facebook.com/apps/954092502440648/instagram-basic-display/basic-display-rate-limiting/
