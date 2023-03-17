const {client} = require('../../db')

const getAllClients = async()=>{
    try {
        const response = await client.findAll()

        if (response.length === 0) throw Error('Clients not found')
        return response
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getAllClients