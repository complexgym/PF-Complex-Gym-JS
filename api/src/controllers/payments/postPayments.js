const mercadopago = require("mercadopago");

mercadopago.configure({
	access_token: process.env.ACCESS_TOKEN_MP,
});

const postPayments = async (req, res) => {
	const data = req.body;

	let preference = {
		items: [
			{
				category_id: data.id_User,
				title: data.name,
				unit_price: data.price,
				quantity: data.amount,
			},
		],
		back_urls: {
			success: `${process.env.SUCCESS}`,
		},
		notification_url: `${process.env.NOTIFICATION_URL}/payments/notification`,
	};

	mercadopago.preferences
		.create(preference)
		.then(function (response) {
			res.json({
				response,
			});
		})
		.catch(function (error) {
			return { error: error.message };
		});
};

module.exports = postPayments;
