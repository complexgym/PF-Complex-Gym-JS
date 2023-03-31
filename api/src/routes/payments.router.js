const { Router } = require("express");
const router = Router();

const {
	postPayments,
	getFeedback,
	postNotification,
	getAllPayments,
	getPaymentsById,
	getAllPaymentsinCash,
	getAllPaymentsInCashById,
	postPaymentsinCash,
	getAllPaymen,
	getPaymentsinCashById,
} = require("../controllers/index");

router.get("/", async (req, res) => {
	try {
		const responseAll = await getAllPaymen();
		return res.status(200).send(responseAll);
	} catch (error) {
		res.status(400).send("Something went wrong");
	}
});

router.post("/", postPayments);

router.post("/cash", postPaymentsinCash);

router.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		if (id.length > 9) {
			let clientidmp = await getPaymentsById(id);
			return res.status(200).send(clientidmp);
		} else {
			let clientidef = await getPaymentsinCashById(id);
			return res.status(200).send(clientidef);
		}
	} catch (error) {
		res.status(400).send("Something went wrong");
	}
});

router.get("/feedback", getFeedback);

router.post("/notification", postNotification);

module.exports = router;
