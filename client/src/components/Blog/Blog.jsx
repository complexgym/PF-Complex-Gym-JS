import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, searchPosts, updateSearch } from "../../redux/actions/actions";
import { useEffect, useState } from "react";
import notFound from "../../assets/otros/not-found-blog.png"
import InstagramPost from "./InstaPost";
import SingleBlog from "./SingleBlog"

//todo blog container
export default function Blog() {
	const dispatch = useDispatch()
	const {matched_posts, search_value} = useSelector(s=>s)
	const [search, setSearch] = useState("")
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(()=>{
		setTimeout(()=>{
			setIsLoaded(true)
		}, [2000])
	}, [])

	const handleChangeSearch = (e)=>{
		setSearch(e.target.value)
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
		if(search_value===""){
			dispatch(getAllPosts())
		} else{
			dispatch(searchPosts(search))
		}
	}, [search_value])

	return (
		<div>
			<section className="bg-white dark:bg-gray-900 pt-12 min-h-[80vh]">
				<div className="py-8 px-4 mx-auto max-w-screen 2xl:max-w-[90vw] lg:py-16 lg:px-6 ">
					
					{/* BLOG */}
					<div className="mx-auto max-w-screen-sm text-center mt-4 lg:mb-8 mb-4">
						<h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Nuestro Blog
						</h2>
					</div>

					{/* FORM: Search and filters */}
					<form className="form-blog mb-4 grid grid-cols-2 md:grid-cols-3 md:w-[60vw] lg:w-[70%] xl:w-[50%] 2xlxl:w-[40%] w-[80vw] gap-2 mx-auto">
						{/* SEARCH */}
						<div className="mr-4">
            				<label for="search" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Búsqueda por título</label>
            				<input type="text" id="search" onChange={handleChangeSearch} value={search}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5 ejercicios para tonificar" required/>
						</div>

						{/* FILTER BY TAG */}
						<div className="mr-4">
						<label for="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Por tema</label>
							<select id="tag" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								<option selected>Seleccione una opción...</option>
								<option value="fitness">Fitness</option>
								<option value="entrenamiento">Entrenamiento</option>
								<option value="administrativo">Administrativo</option>
							</select>
						</div>

						{/* ORDER BY DATE */}
						<div className="mr-4">
							<label for="per_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Orden por fecha</label>
							<select id="per_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								<option selected>Seleccione una opción...</option>
								<option value="newer">Más nuevos</option>
								<option value="older">Más antiguos</option>
							</select>
						</div>
					</form>

					{/* posts, can be initial posts, filtered, or searched posts */}
					{	
						(isLoaded===true && matched_posts.length>0)
						? 
						//get more than 1 post
						<div className="cards grid gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 py-8">
							{matched_posts?.map((b, index)=>{
								return <SingleBlog key={index} blog={b}/>
							})}
						</div>
						: 
						(   //get null posts
							<div className="flex flex-col items-center pt-8 pb-4">
								<img src={notFound} alt="not found img" className="w-[280px] md:w-[400px] rounded-xl"/>
								<p className="text-red-500 font-bold flex justify-center pt-8 pb-4">
									{search_value ? "Perdon, ningún blog cumple la condicion!" : "Ningún blog encontrado!"}
								</p>
							</div> 	
						)
					}

					{/* REDES */}
					<div className="mx-auto max-w-screen-sm text-center mt-4 lg:mb-8 mb-4">
						<h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Nuestras redes
						</h2>
					</div>

					<div className="w-[90vw] grid gap-8 lg:grid-cols-2 xl:grid-cols-3 
					2xl:grid-cols-4 py-8">
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


//*https://sugarshin.github.io/react-instagram-embed/

//*https://developers.facebook.com/apps/954092502440648/instagram-basic-display/basic-display-rate-limiting/