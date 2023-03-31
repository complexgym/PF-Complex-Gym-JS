const { paymentsincash } = require("../../db");

const postpaymentsincash = async(req,res)=>{
 const {clientId,id,status,date_payments,total_amount,plans} = req.body
    const newpayments = await paymentsincash.create({
        clientId:clientId,
        paymentsStatus:status,
        paymentsDate:date_payments,
        paymentsAmount:total_amount,
        plansPayments:plans,
	});
	return newpayments;
};

module.exports = postpaymentsincash;
