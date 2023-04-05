import { sendMailReview } from '../../redux/actions/actions';
import '../../styles/testimonials.css';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';

export default function Testimonials({ user, isAuthenticated }) {
	const dispatch = useDispatch();

	const { testimonials } = useSelector((s) => s);

	const client = { mail: user?.email, name: user?.given_name };

	const handleSend = () => {
		dispatch(sendMailReview(client));
		swal({
			title: 'Gracias!',
			text: '¡Por favor revisa tu mail!',
			icon: 'success',
		});
	};

	return (
		<div className='bg-image-testimonials flex w-100vw h-auto pb-12 font-sans'>
			<div className='flex justify-center testimonials-container w-screen'>
				<section className='reviews 2xl:mt-20 xl:mt-10 lg:mt-20 md:mt-16 xs:mt-12'>
					<div className='flex justify-center'>
						<h2 className=' font-text font-bold text-black drop-shadow-xl 2xl:mb-20 xl:mb-10 2xl:text-5xl xl:text-4xl lg:text-4xl lg:mb-10 md:text-4xl md:mb-10 xs:text-4xl xs:mb-10'>
							OPINIONES
						</h2>
					</div>

					<div className='swiper customer-reviews grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3'>
						{testimonials?.map((s, index) => {
							let rating = 0;
							let numRating = [];
							for (let i = 1; i <= s?.rate; i++) {
								numRating.push(i);
							}
							rating = s.rate;
							if (s.fav)
								return (
									<div
										key={index}
										className='swiper-wrapper w-[90%] xs:w-[100%] md:w-[100%]'
									>
										<div className='swiper-slide bg-[#fcfcfc] w-full h-auto review-card min-h-[55vh] sm:min-h-[45vh] md:min-h-[35vh] lg:min-h-[30vh] xl:min-h-[50vh] 2xl:min-h-[50vh]'>
											<img
												className='quote-icon'
												src={
													'https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/quote_s5hblr.png'
												}
											/>
											<p className='card-body min-h-54  pt-4 text-[#2a2a2a] 2xl:text-lg  xl:text-xs lg:text-[14px] md:text-[13px] xs:text-[13px] font-semibold overflow-hidden'>
                        <ReadMoreButton text={s?.review} maxChars={260} />
											</p>

											<div className='card-footer h-30 '>
												<img
													src={
														s?.url
															? s?.url
															: 'https://res.cloudinary.com/dpxucxgwg/image/upload/v1679450694/anonimo_uim8xm.png'
													}
													alt='profile photo'
													className='profile-photo'
												/>
												<div>
													<span className='name text-[#000000] '>{s?.name}</span>
													<div className='flex'>
														{/* mapping stars based on rating */}
														{numRating?.map((s) => {
															return (
																<div>
																	<img
																		className='star w-6'
																		src={
																			'https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/star_ewmvol.png'
																		}
																	/>
																</div>
															);
														})}
													</div>
												</div>
											</div>
										</div>
									</div>
								);
						})}
					</div>
					{isAuthenticated ? (
						<div className='py-12 text-center'>
							<button
								className='inline-flex justify-center rounded-md bg-lighter-blue py-2 px-3 text-lg font-semibold text-white shadow-sm hover:bg-darker-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-vlighter-blue'
								onClick={handleSend}
							>
								Deja tu opinión
							</button>
						</div>
					) : null}
				</section>
			</div>
		</div>
	);
}
