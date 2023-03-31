const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;

const ValidationsRvw = (input) => {
	let errors = {};

	if (!input.name) {
		errors.name = 'Debe incluir un Nombre';
	} else if (!regexName.test(input.name)) {
		errors.name = 'El Nombre contiene algún caracter invalido';
	} else if (!input.rate) {
		errors.rate = 'Debe incluir una Calificación';
	} else if (!input.review) {
		errors.review = 'Debe agregar una Opinión';
	} else if (input.review.length > 300) {
		errors.review = 'La Opinión es demasiado larga, Max 300 caracteres.';
	}

	return errors;
};

export default ValidationsRvw;
