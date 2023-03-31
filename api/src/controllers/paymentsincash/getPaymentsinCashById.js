const {paymentsincash} = require('../../db')

const getPaymentsinCashById = async(id)=>{
    try {
        const response = await paymentsincash.findAll({ where: { clientId:id } });

        if (response.length === 0) throw Error('ID not found')
        return response
    } catch (error) {
        return {error: error.message}
    }
}


module.exports = getPaymentsinCashById