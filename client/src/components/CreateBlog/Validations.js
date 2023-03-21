// const regexUser = /^[a-zA-Z0-9._-]{3,16}$/;
const regexTitle = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{4,40}$/;
const regexImg = /\.(jpeg|jpg|gif|png)$/
// const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const regexPhone = /^\+?54\d{10}$/;
// const regexDni = /^[0-9]{8}$/;

export default function Validate(input) {
	let errors = {};

	if(!regexTitle.test(input.title)){
		errors.title = "El título debe ser sólo letras y tener un mínimo de 4 y máximo de 40 letras!"
	}

	if(input?.content?.length<100){
		errors.content = "El contenido debe ser tener un mínimo de 100 letras!"
	}

	if(input?.content?.length<100){
		errors.content = "El contenido debe ser tener un mínimo de 100 letras!"
	}

	if(input?.tag?.length===0){
		errors.tag = "Debe seleccionar por lo menos un tag!"
	}

	return errors;
}
