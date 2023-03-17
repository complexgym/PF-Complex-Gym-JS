import { dataBlogs } from "../../assets/utils/dataBlogs";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, searchPosts, updateSearch } from "../../redux/actions/actions";
import { useEffect, useState } from "react";
import { InstagramEmbed } from 'react-social-media-embed';

//todo blog container
export default function Blog() {
	const dispatch = useDispatch()
	const {matched_posts, search_value} = useSelector(s=>s)
	const [search, setSearch] = useState("")
	const [isLoaded, setIsLoaded] = useState(false)

	const handleChangeSearch = (e)=>{
		setSearch(e.target.value)
		// setIsLoaded(false)
		dispatch(updateSearch(e.target.value))
	}

	useEffect(()=>{
		if(search_value){
			setSearch(search_value)
			dispatch(searchPosts(search_value))
			// dispatch(searchPosts(search_value)).then(()=>setIsLoaded(true))
		}
	}, [search])

	useEffect(()=>{
		// setIsLoaded(false)
		if(search_value===""){
			// setIsLoaded(true)
			dispatch(getAllPosts())
		} else{
			dispatch(searchPosts(search))
			// dispatch(searchPosts(search)).then(()=>setIsLoaded(true))
		}
	}, [search_value])

	return (
		<div>
			<section className="bg-white dark:bg-gray-900 pt-12 min-h-[80vh]">
				<div className="py-8 px-4 mx-auto max-w-screen 2xl:max-w-[90vw] lg:py-16 lg:px-6">
					
					{/* BLOG */}
					<div className="mx-auto max-w-screen-sm text-center mt-4 lg:mb-8 mb-4">
						<h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Nuestro Blog
						</h2>
					</div>
					<form className="form-blog mb-4 grid grid-cols-2 md:grid-cols-3 md:w-[60vw] lg:w-[70%] xl:w-[50%] 2xlxl:w-[40%] w-[80vw] gap-2 mx-auto">
						<div className="mr-4">
            				<label for="search" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Búsqueda por título</label>
            				<input type="text" id="search" onChange={handleChangeSearch} value={search}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5 ejercicios para tonificar" required/>
						</div>

						<div className="mr-4">
						<label for="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Por tema</label>
							<select id="tag" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								<option selected>Seleccione una opción...</option>
								<option value="fitness">Fitness</option>
								<option value="entrenamiento">Entrenamiento</option>
								<option value="administrativo">Administrativo</option>
							</select>
						</div>

						<div className="mr-4">
							<label for="per_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Orden por fecha</label>
							<select id="per_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								<option selected>Seleccione una opción...</option>
								<option value="newer">Más nuevos</option>
								<option value="older">Más antiguos</option>
							</select>
						</div>
					</form>
					<div className="cards grid gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 py-8">
						{matched_posts?.map((b, index)=>{
							return <SingleBlog key={index} blog={b}/>
						})
						}
						{/* {isLoaded ? matched_posts?.map((b, index)=>{
							return <SingleBlog key={index} blog={b}/>
						}) : <h1>Loading...</h1>} */}
					</div>



					{/* REDES */}
					<div className="mx-auto max-w-screen-sm text-center mt-4 lg:mb-8 mb-4">
						<h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Nuestras redes
						</h2>
					</div>

					<div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 py-8">
						<InstagramPost url={'https://www.instagram.com/p/CpSkKuMgP_u/'}/>
						<InstagramPost url={'https://www.instagram.com/p/CpkRaEKjOsA/'}/>
						<InstagramPost url={'https://www.instagram.com/p/CoqESveJj-b/'}/>
						<InstagramPost url={'https://www.instagram.com/p/CpyI4RXuaOI/'}/>
					</div>
				</div>
			</section>

			

		</div>
	);
}



//todo single blog

function SingleBlog({ blog }) {
	return (
		<article
			className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700
			flex flex-col justify-between w-10/12 md:w-8/12 xl:w-11/12 mx-auto"
		>
			<div className="flex justify-between items-center mb-5 text-gray-500">
				<img className="bg-center bg-cover rounded-xl w-full h-48" src={blog?.image} />
			</div>
			<div className="flex justify-between items-center mb-5 text-gray-500">
				<span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
					{blog?.tag?.map((b, index) => {
						return (
							<div key={index} className="flex items-center">
								<svg
									className="mr-1 w-3 h-3"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
										clip-rule="evenodd"
									></path>
									<path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
								</svg>
								{b}
							</div>
						);
					})}
				</span>
				<span className="text-sm">{blog?.released_date}</span>
			</div>
			<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				<a href="#">{blog?.title}</a>
			</h2>
			<p className="mb-5 font-light text-gray-500 dark:text-gray-400">
				{blog.content?.length>120 ? blog?.content.substring(0, 100) + "..." :
				blog?.content}
			</p>
			<div className="flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<img
						className="w-7 h-7 rounded-full"
						src={blog?.authorId?.image}
						alt={`${blog?.authorId?.name} avatar`}
					/>
					<span className="font-medium dark:text-white">{blog?.author?.name}</span>
				</div>
				<a
					href="#"
					className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
				>
					Read more
					<svg
						className="ml-2 w-4 h-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</a>
			</div>
		</article>
	);
}


//todo component instagram post, needs only url 
function InstagramPost({url}){
	return(
		<InstagramEmbed
			url={url}
			clientAccessToken='3404509329817188|IGQVJYUlp4anBUaktoZADRIUGhwblVEekdBWTZAFWVVSUjFLV1U3SGZAwN1ljcWd2STNWNUpDN0ZAWX2NLT01FSGpyUkNIMVdtQ0ZA3bVk5Um1qbU11SGFqbTNFWmtmRWlvT0RxTVVneU82M1hyZAG1RZAWgyUgZDZD'
			hideCaption={false}
			containerTagName='div'
			className="w-10/12 md:w-11/12 mx-auto h-[60vh] md:h-[55vh] overflow-hidden rounded"
			protocol=''
			injectScript
			onLoading={() => {}}
			onSuccess={() => {}}
			onAfterRender={() => {}}
			onFailure={() => {}}
		/>
	)
}

//*https://sugarshin.github.io/react-instagram-embed/

//*https://developers.facebook.com/apps/954092502440648/instagram-basic-display/basic-display-rate-limiting/