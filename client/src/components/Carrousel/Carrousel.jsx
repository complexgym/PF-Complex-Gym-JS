import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Spline from '@splinetool/react-spline';

export default function Carrousel() {
	const slides = [
		{
			url: 'https://res.cloudinary.com/dpxucxgwg/image/upload/v1678808808/page-desktop-academia_tnujnc.jpg',
		},
		{
			url: 'https://res.cloudinary.com/dpxucxgwg/image/upload/v1678808808/page-desktop-artes_ksfxse.jpg',
		},
		{
			url: 'https://res.cloudinary.com/dpxucxgwg/image/upload/v1678808808/page-desktop-beach_sjzvtp.jpg',
		},
		{
			url: 'https://res.cloudinary.com/dpxucxgwg/image/upload/v1678808808/page-desktop-crossfit_hmykms.jpg',
		},
		{
			url: 'https://res.cloudinary.com/dpxucxgwg/image/upload/v1678808808/page-desktop-natacao_ixlxmp.jpg',
		},
		{
			url: 'https://res.cloudinary.com/dpxucxgwg/image/upload/v1678808808/page-desktop-pilates_pwdcfd.jpg',
		},
	];

	const { activities } = useSelector((s) => s);

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirtsSlide = currentIndex === 0;
		const newIndex = isFirtsSlide ? activities.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		// <div className='bg-[#ededed] py-14 px-10'>
		<div className='min-h-[120vh] w-[98.5vw] relative'>
			<div className='absolute w-[100%] h-[90%] left-0'>
				<Spline
					className='min-h-[120vh]'
					scene='https://prod.spline.design/TPvZ3LC5QlBY7y8M/scene.splinecode'
				/>
			</div>
			{/* text carousel */}
			<div className=' absolute left-1/2 transform -translate-x-1/2 my-16'>
				<h2 className='text-5xl font-bold text-[#1D459D]'>Actualmente ofrecemos</h2>
			</div>

			{/* content carrousel */}
			<div className='max-w-[1000px] h-[700px] w-full m-auto pt-8 pb-16 px-4 relative z-0'>
				<figure>
					<img
						src={activities[currentIndex]?.image}
						alt={activities[currentIndex]?.name}
					/>
					<figcaption>
						<h3 className='lighter-blue'>
							<b>
								<i>{activities[currentIndex]?.name}</i>
							</b>
						</h3>
						<p>{activities[currentIndex]?.description}</p>
					</figcaption>
				</figure>

				{/* <div
          style={ {backgroundImage: `url(${activities[currentIndex]?.image}` } }
          className="my-36 w-full h-full rounded-2xl bg-center bg-cover duration-500 "
          alt="carrousel img"
        >
        </div>
        <figcaption className="absolute bottom-[-4vw] z-20 px-4">
          <p className="text-black text-5xl font-title relative ">{activities[currentIndex]?.name}</p>
        </figcaption> */}

				{/*Left Arrow*/}
				<div className='absolute top-[50%] -translate-x-0 translate-y-0 left-10 text-2xl rounded-full p-3 bg-black/30 text-white cursor-pointer my-24'>
					<BsChevronCompactLeft onClick={prevSlide} size={40} />
				</div>
				{/*Right Arrow*/}
				<div className='absolute top-[50%] -translate-x-0 translate-y-0 right-10 text-2xl rounded-full p-3 bg-black/30 text-white cursor-pointer my-24 '>
					<BsChevronCompactRight onClick={nextSlide} size={40} />
				</div>
				<div className='flex top-4 justify-center py-4 -my-24 '>
					{activities.map((slide, slideIndex) => (
						<div
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
							className='text-wxl cursor-pointer text-white/60 hover:scale-150 '
						>
							<RxDotFilled size={30} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
