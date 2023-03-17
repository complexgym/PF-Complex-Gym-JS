import { dataBlogs } from "../../assets/utils/dataBlogs";
// import InstagramEmbed from 'react-instagram-embed';

//todo blog container
export default function Blog() {
	return (
		<div>
			<section className="bg-white dark:bg-gray-900 pt-12 min-h-[80vh]">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
						<h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Our Blog
						</h2>
						<p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
							We use an agile approach to test assumptions and connect with the
							needs of your audience early and often.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
						{dataBlogs.map((b, index)=>{
							return <SingleBlog blog={b}/>
						})}
					</div>
				</div>
			</section>

			{/* <InstagramEmbed
				url='https://www.instagram.com/p/CpkRaEKjOsA/'
				// clientAccessToken='3404509329817188|IGQVJYUlp4anBUaktoZADRIUGhwblVEekdBWTZAFWVVSUjFLV1U3SGZAwN1ljcWd2STNWNUpDN0ZAWX2NLT01FSGpyUkNIMVdtQ0ZA3bVk5Um1qbU11SGFqbTNFWmtmRWlvT0RxTVVneU82M1hyZAG1RZAWgyUgZDZD'
				maxWidth={320}
				hideCaption={false}
				containerTagName='div'
				protocol=''
				injectScript
				onLoading={() => {}}
				onSuccess={() => {}}
				onAfterRender={() => {}}
				onFailure={() => {}}
			/> */}

		</div>
	);
}

//todo single blog

function SingleBlog({ blog }) {
	return (
		<article
			className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700
		flex flex-col justify-between"
		>
			<div className="flex justify-between items-center mb-5 text-gray-500">
				<img className="rounded-xl" src={blog.image} />
				{/* <span className="text-sm">14 days ago</span> */}
			</div>
			<div className="flex justify-between items-center mb-5 text-gray-500">
				<span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
					{blog.tag.map((b, index) => {
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
				<span className="text-sm">{blog.released_date}</span>
			</div>
			<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				<a href="#">How to quickly deploy a static website</a>
			</h2>
			<p className="mb-5 font-light text-gray-500 dark:text-gray-400">
				{blog.content}
			</p>
			<div className="flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<img
						className="w-7 h-7 rounded-full"
						src={blog.author.image}
						alt={`${blog.author.name} avatar`}
					/>
					<span className="font-medium dark:text-white">{blog.author.name}</span>
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

//*https://sugarshin.github.io/react-instagram-embed/

//*https://developers.facebook.com/apps/954092502440648/instagram-basic-display/basic-display-rate-limiting/