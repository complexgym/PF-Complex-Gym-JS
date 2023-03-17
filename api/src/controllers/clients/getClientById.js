const {client} = require('../../db')

const getClientById = async(id)=>{
    try {
        const response = await client.findByPk(id)

        if (response.length === 0) throw Error('ID not found')
        return response
    } catch (error) {
        return {error: error.message}
    }
}


module.exports = getClientById