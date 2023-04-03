import { NavLink } from "react-router-dom";

export default function SingleBlog({ blog }) {
	let splitContent = blog?.content?.split(".")

	let newContent = splitContent[0]

	if(newContent.length>120){
		newContent = newContent.substring(0, 120)
	}

	return (
		<article
			className="blog-card font-mono bg-white rounded-sm border border-gray-200 shadow-xl
			flex flex-col justify-around pb-4 w-10/12 md:w-8/12 xl:w-11/12 mx-auto
			relative transition ease-in-out delay-150 transform hover:-translate-y-1" 
		>
			<div>
				
			{/* img, no padding */}
			<div className="flex justify-between w-full items-center mb-5 text-white overflow-hidden">
				<img className="bg-center object-cover rounded-tl-sm rounded-tr-sm w-full h-48 hover:scale-110 duration-300 " src={blog?.image} />
			</div>

			{/* info, padding */}
			<div className="info-blog px-4">
				<div className="flex flex-col justify-between mb-5 text-white">
					{/* <span className="bg-primary-100 text-primary-800 text-xs 
					font-medium inline-flex items-center px-2.5 py-0.5 rounded 
					">  */}
						{/* tags */}
						 {/* {blog?.tag?.map((b, index) => {
							return (
								<div key={index} className="flex ">
									<div className={`border-2 rounded-sm px-1 
									${b==="Entrenamiento" && "border-violet-500 text-violet-500"}
									${b==="Salud" && "border-green-500 text-green-500"}
									${b==="Fitness" && "border-yellow-500 text-yellow-500"}
									${b==="Administrativo" && "border-black text-black"}
									flex`}>
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
								</div>
							);
						})}  */}
					{/* </span> */}


						{/* content's title */}
						<h2 className="flex items-center mb-2 text-lg font-bold tracking-tight lighter-blue">
							{/* > */}
							<p className="font-bold underline text-black">{blog?.title}</p>
						</h2>

						{/* released date, pasando a formato 17/03/2023 */}
						<span className="text-sm lighter-blue">{
							blog?.createdAt.substring(0,10).replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1')}
						</span>
					</div>

					{/* content/message */}
					<div className="flex flex-wrap">
						<p className="mb-5 font-light text-black dark:text-gray-400">
							{newContent + "..."}
						</p>
					</div>
					
					{/* author and read more */}
					<div className="h-full flex justify-between items-end">
						{/* <div className="flex items-center space-x-4">
							<>
								<img
								className="w-7 h-7 rounded-full"
								src={blog?.author_image}
								alt={`${blog?.author_image} avatar`}
								/>
								<span className="font-medium lighter-blue">{blog?.author_name}</span>
							</>
						</div> */}
						{/*  */}
						<NavLink
							to={`/blog/${blog.id}`}
							className="inline-flex items-center font-medium dark:text-primary-500 lighter-blue uppercase hover:underline"
						>
							Leer más
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
						</NavLink>
					</div>
				</div>
			</div>
		</article>
	);
}