const {mercadopago} = require("../../db")

const postMercadoPago = async({clientId,id,status,date_payments,total_amount,plans,order})=>{
    const newpayments = await mercadopago.create({
        clientId:clientId,
		paymentsId:id,
        paymentsStatus:status,
        paymentsDate:date_payments,
        paymentsAmount:total_amount,
        plansPayments:plans,
        order:order
	});
    return newpayments;
}

module.exports = postMercadoPago