const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;

export default function ValidateActivity(input) {
	let errors = {};

	if (!input.image) {
		errors.image = 'Debe ingresar una Imagen';
	} else if (!input.name) {
		errors.name = 'Debe ingresar un nombre';
	} else if (!regexName.test(input.name)) {
		errors.name = 'El Nombre contiene algún caracter invalido';
	} else if (input.name.length > 50) {
		errors.name = 'El Nombre es demasiado largo, Max 50 caracteres.';
	} else if (input.name.length < 2) {
		errors.name = 'El Nombre es demasiado corto, Min 2 caracteres.';
	} else if (!input.description) {
		errors.description = 'Debe ingresar una descripción';
	}

	return errors;
}
