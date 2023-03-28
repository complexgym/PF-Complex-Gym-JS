const regexName = /^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ\s]{2,50}$/;

const ValidationsRvw = () => {
	let errors = {};

	if (!input.name) {
		errors.name = 'El campo Nombre debe rellenarse obligatoriamente';
	} else if (!regexName.test(input.name)) {
		errors.name = 'El Nombre contiene algún caracter invalido';
	}

	return errors;
};

export default ValidationsRvw;
