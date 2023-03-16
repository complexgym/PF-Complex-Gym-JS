import { Link } from 'react-router-dom';

export default function Error404() {
	return (
		<main className='h-screen w-full flex flex-col justify-center items-center bg-[#07070a]'>
			<h1 className='text-9xl font-extrabold text-white tracking-widest'>404</h1>
			<div className='bg-[#1D459D] px-2 text-sm rounded rotate-12 absolute'>
				Page Not Found
			</div>
			<button className='mt-5'>
				<a className='relative inline-block text-sm font-medium text-[#1D459D] group active:text-[#4ab4ab] focus:outline-none focus:ring'>
					<span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#1D459D] group-hover:translate-y-0 group-hover:translate-x-0'></span>

					<span className='relative block px-8 py-3 bg-[#231F20] border border-current'>
						<Link to='/home'>Go Home</Link>
					</span>
				</a>
			</button>
		</main>
	);
}
