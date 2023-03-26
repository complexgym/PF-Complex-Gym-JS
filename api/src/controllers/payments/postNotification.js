const mercadopago = require("mercadopago");
const postMercadoPago = require("./postMercadoPago.js");

mercadopago.configure({
	access_token: process.env.ACCESS_TOKEN_MP,
});
const axios = require("axios");
const { payment } = require("mercadopago");
//const {getPaymentValidation} = require("./getPaymentValidation")

const postNotification = async (req, res) => {
	var Payment;
	const { query } = req;
	const topic = query.topic || query.type;
	switch (topic) {
		case "payment":
			const paymentId = query.id || query["data.id"];
			Payment = await mercadopago.payment.findById(paymentId);
			let data = {
				clientId: Payment.body.additional_info.items[0].category_id,
				id: Payment.body.id,
				status: Payment.body.status,
				date_payments: Payment.body.date_approved,
				total_amount: Payment.body.transaction_amount,
				plans: Payment.body.description,
				order: Payment.body.order.id,
			};
			postMercadoPago(data);
			break;

		case "merchant_order":
			const orderId = query.id;
			var { body } = await mercadopago.merchant_orders.findById(orderId);
			break;
	}

	res.send();
};
module.exports = postNotification;
