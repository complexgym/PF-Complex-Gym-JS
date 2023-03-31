// const regexUser = /^[a-zA-Z0-9._-]{3,16}$/;
// const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
const regexPhone = /^\+(?:\d[\-\s]?){8,14}\d$/;
const regexDni = /^[0-9]{6,9}$/;

export default function Validate(input) {
	let errors = {};

	if (input.user.length > 16) {
		errors.user = 'El Nombre de usuario es demasiado largo, Max 16 caracteres.';
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
	} else if (input.dni.length > 10) {
		errors.dni = 'El DNI muy largo.';
	} else if (input.dni.length < 6) {
		errors.dni = 'El DNI muy corto.';
	} else if (input.age.length > 3) {
		errors.age = 'Debe ingresar una Edad valida';
	} else if (input.age > 120) {
		errors.age = '¿Tienes más de 120 Años? Dame un consejo para llegar a esa Edad!';
	} else if (input.weight > 1000) {
		errors.weight = 'Ingrese un peso más rasonable';
	} else if (!input.height.length > 3) {
		errors.height = 'Debe ingresar una Estatura valida. En centímetros Ej: 180';
	}

	return errors;
}
