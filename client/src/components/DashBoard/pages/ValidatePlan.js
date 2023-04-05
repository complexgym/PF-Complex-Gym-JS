export default function ValidatePlan(input) {
	const error = {};

	if (input.name.length === 0) {
		error.name = "Campo nombre obligatorio";
	}

	if (input.name.length > 45) {
		error.name = "Debe ser menor a 45 letras";
	}

	if (input.price === 0) {
		error.price = "El precio es obligatorio";
	}
	if (input.price >= 1000000000) {
		error.price = "El precio debe ser menor a 10 cifras";
	}

	return error;
}
