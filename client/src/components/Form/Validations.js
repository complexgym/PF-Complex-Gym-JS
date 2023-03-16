export default function Validate(input) {
	let errors = {};

	if (!input.user) {
		errors.user = '';
	}
	if (!input.name) {
		errors.name = '';
	}
	if (!input.dni) {
		errors.dni = '';
	}
	if (!input.avatar) {
		errors.avatar = '';
	}
	if (!input.height) {
		errors.height = '';
	}
	if (!input.weight) {
		errors.weight = '';
	}
	if (!input.age) {
		errors.age = '';
	}
	if (!input.phone) {
		errors.phone = '';
	}
	if (!input.mail) {
		errors.mail = '';
	}
	if (!input.adress) {
		errors.adress = '';
	}
}
