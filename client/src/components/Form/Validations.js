const regexUser = /^[a-zA-Z0-9._-]{3,16}$/;
const regexName = /^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ\s]{2,50}$/;
const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexPhone = /^\+(?:\d[\-\s]?){8,14}\d$/;
const regexDni = /^[0-9]{6,9}$/;

export default function Validate(input) {
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
	} else if (input.about.length > 500) {
		errors.about = 'La Descripción es demasiado larga, Max 500 caracteres.';
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
	} else if (!input.dni) {
		errors.dni = 'El campo DNI debe rellenarse obligatoriamente';
	} else if (!regexDni.test(input.dni)) {
		errors.dni = 'Debe ingresar un Dni valido';
	} else if (input.dni.length > 9) {
		errors.dni = 'El DNI muy largo.';
	} else if (input.dni.length < 6) {
		errors.dni = 'El DNI muy corto.';
	} else if (!input.age) {
		errors.age = 'El campo Edad debe rellenarse obligatoriamente';
	} else if (!input.weight) {
		errors.weight = 'El campo Peso debe rellenarse obligatoriamente';
	} else if (!input.height) {
		errors.height = 'El campo Estatura debe rellenarse obligatoriamente';
	} else if (!input.address) {
		errors.address = 'El campo Dirección debe rellenarse obligatoriamente';
	} else if (!input.city) {
		errors.city = 'El campo Ciudad debe rellenarse obligatoriamente';
	}

	return errors;
}
