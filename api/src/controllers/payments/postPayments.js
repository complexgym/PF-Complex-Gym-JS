const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MP,
  });

const postPayments = async(req,res)=>{
    const data = req.body
    let preference = {
		items: [
			{
				title: data.description,
				unit_price: Number(data.price),
				quantity: Number(data.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:3001/payments/feedback",
			"failure": "http://localhost:3001/payments/feedback",
			"pending": "http://localhost:3001/payments/feedback"
		},
		auto_return: "approved",
		//notification_url:"http://localhost:3001/pagos/notification"
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body
			});
		}).catch(function (error) {
			console.log(error);
		});
}

module.exports = postPayments