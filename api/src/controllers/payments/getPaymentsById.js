const {mercadopago} = require('../../db')

const getPaymentsById = async(id)=>{
    try {
        const response = await mercadopago.findByPk(id)

        if (response.length === 0) throw Error('ID not found')
        return response
    } catch (error) {
        return {error: error.message}
    }
}


module.exports = getPaymentsById