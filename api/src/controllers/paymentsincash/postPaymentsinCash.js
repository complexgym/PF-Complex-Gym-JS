const {paymentsincash} = require("../../db")

const postpaymentsincash = async({clientId,id,status,date_payments,total_amount,plans,order})=>{
    const newpayments = await paymentsincash.create({
        clientId:clientId,
        paymentsStatus:status,
        paymentsDate:date_payments,
        paymentsAmount:total_amount,
        plansPayments:plans,
	});
    return newpayments;
}

module.exports = postpaymentsincash