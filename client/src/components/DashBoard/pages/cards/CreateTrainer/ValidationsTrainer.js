const regexUser = /^[a-zA-Z0-9._-]{3,16}$/;
const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexPhone = /^\+(?:\d[\-\s]?){8,14}\d$/;

export default function ValidateTrainer(input) {
	let errors = {};

	if (!input.user) {
		errors.user = 'El campo Nombre de usuario debe rellenarse obligatoriamente';
	} else if (!regexUser.test(input.user)) {
		errors.user = 'Sólo se aceptan letras y números sin espacios.';
	} else if (input.user.length < 3) {
		errors.user = 'El Nombre de usuario es demasiado corto, Min 3 caracteres.';
	} else if (input.user.length > 16) {
		errors.user = 'El Nombre de usuario es demasiado largo, Max 16 caracteres.';
	} else if (!input.mail) {
		errors.mail = 'El campo Correo electrónico debe rellenarse obligatoriamente';
	} else if (!regexMail.test(input.mail)) {
		errors.mail = 'Ingrese un email valido';
	} else if (!input.name) {
		errors.name = 'El campo Nombre debe rellenarse obligatoriamente';
	} else if (!regexName.test(input.name)) {
		errors.name = 'El Nombre contiene algún caracter invalido';
	} else if (input.name.length > 50) {
		errors.name = 'El Nombre es demasiado largo, Max 50 caracteres.';
	} else if (input.name.length < 2) {
		errors.name = 'El Nombre es demasiado corto, Min 2 caracteres.';
	} else if (!input.lastName) {
		errors.lastName = 'El campo Apellido debe rellenarse obligatoriamente';
	} else if (!regexName.test(input.lastName)) {
		errors.lastName = 'El Apellido contiene algún caracter invalido';
	} else if (input.lastName.length > 50) {
		errors.lastName = 'El Apellido es demasiado largo, Max 50 caracteres.';
	} else if (input.lastName.length < 2) {
		errors.lastName = 'El Apellido es demasiado corto, Min 2 caracteres.';
	} else if (!input.phone) {
		errors.phone = 'El campo Teléfono debe rellenarse obligatoriamente';
	} else if (!regexPhone.test(input.phone)) {
		errors.phone = 'El úmero de Teléfono debe ser formato internacional válido';
	} else if (!input.address) {
		errors.address = 'El campo Dirección debe rellenarse obligatoriamente';
	}

	return errors;
}
