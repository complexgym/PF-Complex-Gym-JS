export default function SingleBlog({ blog }) {
	return (
		<article
			className="card bg-slate-100 p-6 rounded-lg border border-gray-200 shadow-md
			flex flex-col justify-between w-10/12 md:w-8/12 xl:w-11/12 mx-auto
			duration-500"
		>
			<div className="flex justify-between items-center mb-5 text-white">
				<img className="bg-center bg-cover rounded-xl w-full h-48" src={blog?.image} />
			</div>
			<div className="flex justify-between items-center mb-5 text-white">
				<span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
					{blog?.tag?.map((b, index) => {
						return (
							<div key={index} className="flex items-center">
								<div className={`border-2 rounded-sm px-1 
								${b==="Entrenamiento" && "border-violet-500 text-violet-500"}
								${b==="Salud" && "border-green-500 text-green-500"}
								${b==="Fitness" && "border-yellow-500 text-yellow-500"}
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
					})}
				</span>
				<span className="text-sm">{blog?.released_date}</span>
			</div>
			<h2 className="mb-2 text-2xl font-bold tracking-tight lighter-blue">
				<a href="#">{blog?.title}</a>
			</h2>
			<p className="mb-5 font-light text-black dark:text-gray-400">
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
					<span className="font-medium lighter-blue">{blog?.author?.name}</span>
				</div>
				<a
					href="#"
					className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 lighter-blue hover:underline"
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