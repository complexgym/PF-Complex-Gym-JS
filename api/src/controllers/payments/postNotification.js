const mercadopago = require("mercadopago");
const postMercadoPago = require("./postMercadoPago.js");
const fetch = require("cross-fetch");

mercadopago.configure({
	access_token: process.env.ACCESS_TOKEN_MP,
});


const postNotification = async (req, res) => {
	var Payment;
	const { query } = req;
	const topic = query.topic || query.type;
	switch (topic) {
		case "payment":
			const paymentId = query.id || query["data.id"];
			Payment = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {headers: {Authorization: `Bearer ${process.env.ACCESS_TOKEN_MP}`}}).then((res) => res.json());		
			let data = {
				clientId: Payment.additional_info.items[0].category_id,
				id: Payment.id,
				status: Payment.status,
				date_payments: Payment.date_approved,
				total_amount: Payment.transaction_amount,
				plans: Payment.description,
				order: Payment.order.id,
			};
			postMercadoPago(data);
			break;

		case "merchant_order":
			const orderId = query.id;
			await mercadopago.merchant_orders.findById(orderId);
			break;
	}

	res.send();
};
module.exports = postNotification;
