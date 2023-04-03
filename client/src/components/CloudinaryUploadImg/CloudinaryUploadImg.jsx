import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CloudinaryUploadImg({ onUpload }) {
	const [imageSelected, setImageSelected] = useState('');
	const [image, setImage] = useState('');

	const uploadImage = () => {
		const formData = new FormData();
		formData.append('file', imageSelected);
		formData.append('upload_preset', 'gp0cjncm');

		axios
			.post('https://api.cloudinary.com/v1_1/dpxucxgwg/image/upload', formData)
			.then((response) => setImage(response.data.secure_url));
	};

	useEffect(() => {
		if (image) {
			onUpload(image);
		}
	}, [image]);

	return (
		<div>
			<div className='flex'>
				<div className='flex'>
					<div class='shrink-0'>
						<label
							htmlFor='about'
							className='mt-2 ml-4 block text-sm font-medium leading-6 text-gray-900'
						>
							Foto seleccionada
							<img
								class='h-32 w-32 object-cover rounded-full'
								src={
									image
										? image
										: `https://res.cloudinary.com/dpxucxgwg/image/upload/v1679450694/anonimo_uim8xm.png`
								}
								alt='imagen cargada'
							/>
						</label>
					</div>
					<label class='block pl-6 py-11'>
						<span class='sr-only'>Selecciona una foto de perfil</span>
						<input
							type='file'
							className='block w-full text-lg text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-violet-50 file:lighter-blue hover:file:bg-violet-100'
							accept='.png, .jpg, .jpeg .webp .gif. .svg'
							name=''
							id=''
							onChange={(e) => {
								setImageSelected(e.target.files[0]);
							}}
						/>
					</label>

					<button
						type='button'
						className='ml-6 my-11 lighter-blue mr-4 py-2 px-4 rounded-full border-0 text-lg font-semibold bg-violet-100 h-fit'
						onClick={uploadImage}
					>
						Cargar Imagen
					</button>
				</div>
			</div>
		</div>
	);
}
