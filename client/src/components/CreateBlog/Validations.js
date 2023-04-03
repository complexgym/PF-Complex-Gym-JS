const regexTitle = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ¿?¡!.,\s]{4,80}$/;
const regexImg = /\.(jpeg|jpg|gif|png)$/;
const regexIg = /\bhttps?:\/\/(www\.)?instagram\.com\/p\/[a-zA-Z0-9_-]+\/?\b/;

export default function Validate(input) {
	let errors = {};

	console.log(Boolean(input.isInstagram));

	if (!regexTitle.test(input.title)) {
		errors.title =
			"El título debe ser sólo letras y tener un mínimo de 4 y máximo de 80 letras!";
	}

	if (Boolean(input.isInstagram) && !regexIg.test(input.image)) {
		errors.image =
			"La url debe empezar en https://instagram.com/ o https://www.instagram.com/";
	}

	if (!Boolean(input.isInstagram) && !regexImg.test(input.image)) {
		errors.image = "Debe cargar una imagen!";
	}

	if (!input.isInstagram && !input.title) {
		errors.image = "";
	}

	if (!input.isInstagram) {
		if (input?.content?.length < 100) {
			errors.content = "El contenido debe ser tener un mínimo de 100 letras!";
		}
	}

	if (input?.tag?.length === 0) {
		errors.tag = "Debe seleccionar por lo menos un tag!";
	}

	return errors;
}
