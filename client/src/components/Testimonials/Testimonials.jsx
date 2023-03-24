import '../../styles/testimonials.css';

export default function Testimonials() {
	let slides = [
		{
			url: 'https://p4.wallpaperbetter.com/wallpaper/433/232/31/blondes-women-white-actress-jennifer-aniston-celebrity-simple-background-white-background-people-celebrity-hd-art-wallpaper-preview.jpg',
			name: 'Jennifer Anniston',
			text: `There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration`,
		},
		{
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHi5Vn2oLULOgdLkWZ88jJ9xgJincg5uYpDIANxV-oaA&s',
			name: 'Shakira',
			text: `There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration`,
		},
		{
			url: 'https://i1.sndcdn.com/avatars-46GF1rag02JyR6y8-zIUu6w-t500x500.jpg',
			name: 'Saul Goodman',
			text: `There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration`,
		},
		// {
		// 	url: 'https://i1.sndcdn.com/avatars-46GF1rag02JyR6y8-zIUu6w-t500x500.jpg',
		// 	name: 'Saul Goodman',
		// 	text: `There are many variations of passages of Lorem Ipsum available,
    //         but the majority have suffered alteration`,
		// },
		// {
		// 	url: 'https://i1.sndcdn.com/avatars-46GF1rag02JyR6y8-zIUu6w-t500x500.jpg',
		// 	name: 'Saul Goodman',
		// 	text: `There are many variations of passages of Lorem Ipsum available,
    //         but the majority have suffered alteration`,
		// },
	];
	return (
		<div className='flex w-100vw h-[80vh] pb-16 font-sans bg-[#E1E1E1]'>
			<div className='flex justify-center testimonials-container'>
				<section className='reviews mt-20'>
					<div className='flex justify-center'>
						<h2 className=' text-black text-5xl font-bold font-sans mb-20'>OPINIONES</h2>
					</div>

					<div className='swiper customer-reviews grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
						{slides.map((s) => {
							return (
								<div className='swiper-wrapper w-11/12 sm:w-9/12 md:w-11/12'>
									<div className='swiper-slide w-full review-card min-h-[55vh] sm:min-h-[45vh] md:min-h-[40vh]'>
										<img className='quote-icon' src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/quote_s5hblr.png"} />
										{/* <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft}/> */}
										<h3 className='card-title lighter-blue'>I loved it</h3>
										<p className='card-body'>{s.text}</p>

										<div className='card-footer'>
											<img src={s.url} alt='profile photo' className='profile-photo' />
											<div>
												<span className='name '>{s.name}</span>
												<div className='flex'>
													<img className='star w-6' src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/star_ewmvol.png"} />
													<img className='star w-6' src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/star_ewmvol.png"} />
													<img className='star w-6' src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/star_ewmvol.png"} />
													<img className='star w-6' src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/star_ewmvol.png"} />
													<img className='star w-6' src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/star_ewmvol.png"} />
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		</div>
	);
}

// export default function Testimonials(){
//     let slides = [
//         {
//             url: 'https://p4.wallpaperbetter.com/wallpaper/433/232/31/blondes-women-white-actress-jennifer-aniston-celebrity-simple-background-white-background-people-celebrity-hd-art-wallpaper-preview.jpg',
//             name: 'Jennifer Anniston'
//         },
//         {
//             url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHi5Vn2oLULOgdLkWZ88jJ9xgJincg5uYpDIANxV-oaA&s',
//             name: 'Shakira'
//         },
//         {
//             url: 'https://i1.sndcdn.com/avatars-46GF1rag02JyR6y8-zIUu6w-t500x500.jpg',
//             name: 'Saul Goodman'
//         },
// 	];

//     const [currentIndex, setCurrentIndex] = useState(0);

// 	const prevSlide = () => {
// 		const isFirtsSlide = currentIndex === 0;
// 		const newIndex = isFirtsSlide ? slides.length - 1 : currentIndex - 1;
// 		setCurrentIndex(newIndex);
// 	};

// 	const nextSlide = () => {
// 		const isLastSlide = currentIndex === slides.length - 1;
// 		const newIndex = isLastSlide ? 0 : currentIndex + 1;
// 		setCurrentIndex(newIndex);
// 	};

//     //*actual=el de la izquierda en el grid 2 col, y el que muestra en grid 1 col
//     const indexActualSlide = currentIndex
//     const indexNextSlide = currentIndex!==slides.length-1 ?  currentIndex + 1 : 0

//     return(
//         <div className={`w-full min-h-screen h-fit bg-testimonials pt-36`}>
//             <div className="flex justify-center relative">
//                 <h2 className="btn-home">Opiniones</h2>
//             </div>

//             <div className="cards w-4/5 sm:w-3/5 xl:w-3/5 2xl:w-1/2 h-32 mx-auto pt-8">
//                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center duration-1000'>
//                     <div className="card w-full bg-card-testimonials flex flex-col items-center py-8 rounded-2xl duration-500">
//                         <img src={slides[indexActualSlide].url} className="w-28 h-28 rounded-full border-4 border-gold"/>
//                         <h2 className="lighter-blue text-lg pt-2">{slides[indexActualSlide].name}</h2>
//                         <p className="text-center text-sm bg-white w-2/3 my-4 p-4 rounded-xl border-4 border-gold"
//                         >
//                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus rerum numquam aliquam alias excepturi non expedita quas. Accusantium reiciendis, earum accusamus neque eos nostrum ab, error sed obcaecati architecto facere!
//                         </p>
//                     </div>

//                     {/** display none/hidden if it is in desktop  **/}
//                     <div className="card w-full bg-card-testimonials hidden lg:flex flex-col items-center py-8 rounded-2xl duration-500">
//                         <img src={slides[indexNextSlide].url} className="w-28 h-28 rounded-full border-4 border-gold"/>
//                         <h2 className="lighter-blue text-lg pt-2">{slides[indexNextSlide].name}</h2>
//                         <p className="text-center text-sm bg-white w-2/3 my-4 p-4 rounded-xl border-4 border-gold"
//                         >
//                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus rerum numquam aliquam alias excepturi non expedita quas. Accusantium reiciendis, earum accusamus neque eos nostrum ab, error sed obcaecati architecto facere!
//                         </p>
//                     </div>
//                 </div>
//                 {/*Left Arrow*/}
// 				<div className='w-full flex justify-center pt-10'>
//                     <div className='relative'>
//                         <BsChevronCompactLeft className="text-white"
//                         onClick={prevSlide} size={40} />
//                     </div>
//                     {/*Right Arrow*/}
//                     <div className='relative'>
//                         <BsChevronCompactRight className='text-white'
//                          onClick={nextSlide} size={40} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
