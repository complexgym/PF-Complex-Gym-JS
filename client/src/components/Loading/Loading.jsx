import Spline from '@splinetool/react-spline';

export default function Loading() {
	return (
		<div className='w-[99vw] h-screen items-center flex bg-loaging'>
			<div className='w-screen md:h-96 xl:h-full'>
				<Spline scene='https://prod.spline.design/ffORQphusIoT5k1H/scene.splinecode' />
			</div>
		</div>
	);
}
