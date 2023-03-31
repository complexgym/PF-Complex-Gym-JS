const {paymentsincash} = require("../../db")

const getAllPaymentsinCash = async()=>{
    try {
        const response = await paymentsincash.findAll()

        if (response.length === 0) throw Error('Payments not found')
        return response
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getAllPaymentsinCash