const getAllPayments = require('./getAllPayments');
const getAllPaymentsinCash = require('../paymentsincash/getAllPaymentsinCash')

const getAllPaymen = async()=>{
    const MPInfo = await getAllPayments();
    const EfInfo = await getAllPaymentsinCash();
    const allInfo = MPInfo.concat(EfInfo);

    return allInfo;
}

module.exports = getAllPaymen