const {mercadopago} = require("../../db")

const getAllPayments = async()=>{
    try {
        const response = await mercadopago.findAll()

        if (response.length === 0) throw Error('Payments not found')
        return response
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getAllPayments