const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;

const ValidationsRvw = () => {
	let errors = {};

	if (!input.name) {
		errors.name = 'Debe incluir un Nombre';
	} else if (!regexName.test(input.name)) {
		errors.name = 'El Nombre contiene algún caracter invalido';
	} else if (!input.text) {
		errors.text = 'Debe agregar una Opinión';
	} else if (input.text.length > 300) {
		errors.text = 'La Opinión es demasiado larga, Max 300 caracteres.';
	}

	return errors;
};

export default ValidationsRvw;
