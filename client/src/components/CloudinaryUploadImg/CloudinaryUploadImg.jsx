import { useEffect, useState } from "react";
import axios from "axios";

export default function Prueba({onUpload}) {
	const [imageSelected, setImageSelected] = useState("");
	const [image, setImage] = useState("");

	const uploadImage = () => {
		const formData = new FormData();
		formData.append("file", imageSelected);
		formData.append("upload_preset", "gp0cjncm");

		axios
			.post("http://api.cloudinary.com/v1_1/dpxucxgwg/image/upload", formData)
			.then((response) => setImage(response.data.secure_url));
	};

  useEffect(()=>{
    if(image){
      onUpload(image)
    }
  }, [image])

	return (
		<div>
			<div className="flex">
				<div className="flex">
					<input
						type="file"
						className="block h-8 w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
						accept=".png, .jpg, .jpeg .webp .gif. .svg"
						name=""
						id=""
						onChange={(e) => {
							setImageSelected(e.target.files[0]);
						}}
					/>

					<button type="button" className="ml-2 text-xs border-2 border-gray-500 bg-gray-200 px-1 py-1 rounded-md"
          onClick={uploadImage}>
						Upload image
					</button>
				</div>
			</div>

			<img src={image} className="w-20 my-6" />
		</div>
	);
}
