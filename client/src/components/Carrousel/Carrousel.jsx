import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

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

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirtsSlide = currentIndex === 0;
		const newIndex = isFirtsSlide ? slides.length - 1 : currentIndex - 1;
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
		<div className='bg-carrousel py-14 px-10'>
			{/* text carousel */}
			<div className='flex justify-center'>
				<h2 className='btn-home'>Actualmente ofrecemos:</h2>
			</div>

			{/* content carrousel */}
			<div className='max-w-[1400px] h-[780px] w-full m-auto pt-8 pb-16 px-4 relative'>
				<div
					style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
					className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
				></div>
				{/*Left Arrow*/}
				<div className='absolute top-[50%] -translate-x-0 translate-y-0 left-10 text-2xl rounded-full p-3 bg-black/30 text-white cursor-pointer '>
					<BsChevronCompactLeft onClick={prevSlide} size={40} />
				</div>
				{/*Right Arrow*/}
				<div className='absolute top-[50%] -translate-x-0 translate-y-0 right-10 text-2xl rounded-full p-3 bg-black/30 text-white cursor-pointer '>
					<BsChevronCompactRight onClick={nextSlide} size={40} />
				</div>
				<div className='flex top-4 justify-center py-4'>
					{slides.map((slide, slideIndex) => (
						<div
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
							className='text-wxl cursor-pointer text-white/60 hover:scale-150'
						>
							<RxDotFilled size={30} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
