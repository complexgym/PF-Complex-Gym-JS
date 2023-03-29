import { useEffect, useState } from "react";
import axios from "axios";

export default function Prueba({ onUpload }) {
	const [pdfSelected, setPdfSelected] = useState("");
	const [pdf, setPdf] = useState("");

	const uploadImage = () => {
		const formData = new FormData();
		formData.append("file", pdfSelected);
		formData.append("upload_preset", "gp0cjncm");

		axios
			.post("https://api.cloudinary.com/v1_1/dpxucxgwg/image/upload", formData)
			.then((response) => setPdf(response.data.secure_url));
	  };

	useEffect(() => {
		if (pdf) {
			onUpload(pdf);
		}
	}, [pdf]);

  console.log(pdf);

	return (
		<div>
			<div className="flex">
				<div className="flex">
					<div class="shrink-0">
						<label
							htmlFor="about"
							className="mt-2 ml-4 block text-sm font-medium leading-6 text-gray-900"
						>
							PDF seleccionado
							<img
								class="h-32 w-32 object-cover rounded-full"
								src={pdf}
								alt="imagen cargada"
							/>
						</label>
					</div>
					<label class="block pl-6 py-11">
						<span class="sr-only">Seleccione la rutina</span>
						<input
							type="file"
							className="block w-full text-lg text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-violet-50 file:lighter-blue hover:file:bg-violet-100"
							accept=".pdf"
							name=""
							id=""
							onChange={(e) => {
								setPdf(e.target.files[0]);
							}}
						/>
					</label>

					<button
						type="button"
						className="ml-6 my-11 lighter-blue mr-4 py-2 px-4 rounded-full border-0 text-lg font-semibold bg-violet-100 h-fit"
						onClick={uploadImage}
					>
						Cargar PDF
					</button>
				</div>
			</div>
		</div>
	);
}