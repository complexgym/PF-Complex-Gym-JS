const mercadopago = require("mercadopago");

mercadopago.configure({
	access_token: process.env.ACCESS_TOKEN_MP,
});

const postPayments = async (req, res) => {
	const data = req.body;
	let products = [];

	//TODO
	let obj = {
		category_id: data.id_User, //id user
		title: data.name, 
		unit_price: data.price, 
		quantity: data.amount,
	};

	products.push(obj);

	let preference = {
		items: products,
		back_urls: {
			success: `${process.env.SUCCESS}`,
		},
		//auto_return: "approved",
		notification_url: `${process.env.NOTIFICATION_URL}/payments/notification`,
	};

	mercadopago.preferences
		.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id,
			});
		})
		.catch(function (error) {
			console.log(error.message);
			return { error: error.message };
		});
};

module.exports = postPayments;
