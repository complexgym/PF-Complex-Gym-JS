const getAllPayments = require("./getAllPayments");
const getAllPaymentsinCash = require("../paymentsincash/getAllPaymentsinCash");

const getAllPaymen = async () => {
	const MPInfo = await getAllPayments();
	const EfInfo = await getAllPaymentsinCash();

	if (MPInfo.error === "Payments not found") {
		if (EfInfo.error === "Payments not found") {
			return "No payments found";
		} else {
			return EfInfo;
		}
	} else {
		if (EfInfo.error === "Payments not found") {
			return MPInfo;
		} else {
			const allInfo = MPInfo.concat(EfInfo);
			return allInfo;
		}
	}
};

module.exports = getAllPaymen;
