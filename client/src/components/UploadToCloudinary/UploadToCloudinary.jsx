import { useEffect, useRef } from 'react';

export default function UploadWidget() {
	const cloudinaryRef = useRef();
	const widgetRef = useRef();

	useEffect(() => {
		cloudinaryRef.current = window.cloudinary;
		widgetRef.current = cloudinaryRef.current.createUploadWidget(
			{
				cloud_name: 'dpxucxgwg',
				upload_preset: 'gp0cjncm',
			},
			function (err, res) {
				// console.log(res);
			}
		);
	}, []);

	return (
		<div className='flex'>
			<button
				className='border-2 border-gray-300 border-dashed px-8 py-2 rounded-md'
				onClick={() => widgetRef.current.open()}
			>
				Presione para subir imagen
			</button>
		</div>
	);
}
