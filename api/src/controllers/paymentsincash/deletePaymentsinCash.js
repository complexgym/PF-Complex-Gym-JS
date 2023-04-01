const { paymentsincash } = require("../../db");

const deletePaymentsinCash = async (paymentsId) => {
	try {
		const find = paymentsincash.findByPk(paymentsId);
		if (find.length === 0) throw Error("Payments not found");
		else {
			await paymentsincash.destroy({
				where: { paymentsId },
			});
			return "Payment successfully deleted";
		}
	} catch (error) {
		return { error: error.message };
	}
};

module.exports = deletePaymentsinCash;
