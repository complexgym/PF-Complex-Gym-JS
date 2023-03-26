import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Spline from '@splinetool/react-spline';
import '../../styles/carrousel.css';

export default function Carrousel() {
	const { activities } = useSelector((s) => s);

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirtsSlide = currentIndex === 0;
		const newIndex = isFirtsSlide ? activities.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === activities.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

  return (
    <div className=" min-h-[100vh] w-[100vw]">
      <div className="absolute w-[100%] h-[90%]left-0 ">
        <Spline
          className='min-h-[100vh] '
          scene="https://prod.spline.design/TPvZ3LC5QlBY7y8M/scene.splinecode"
        />
      </div>
      {/* text carousel */}
      <div className=" absolute left-1/2 transform -translate-x-1/2 lg:w-[fit-content] md:w-[fit-content]">
        <h2 className="text-center font-bold text-black 2xl:text-5xl 2xl:mt-20 xl:text-3xl xl:mt-10 lg:text-5xl lg:mt-50 md:text-3xl md:mt-50 xs:text-4xl xs:mt-50 ">ACTUALMENTE OFRECEMOS</h2>
      </div>

			{/* content carrousel */}
			<div className='m-auto relative z-0 2xl:w-[60vw] 2xl:h-[70vh] xl:h-[70vh] xl:w-[60vw] 2xl:top-10 xl:top-10 lg:h-[45vh] lg:top-50 md:h-[45vh] md:top-50 xs:w-[90vw] xs:h-[35vh] xs:top-50'>
				<figure className=''>
					<img className=''
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
