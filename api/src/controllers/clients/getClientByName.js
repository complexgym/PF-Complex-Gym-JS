const {client} = require('../../db')

/**
 * 
 * @param {string} name 
 */
const getClientByName = async (name)=>{
    try {
        const response = await client.findAll({
            where:{
                name: name
            }
        })

        if (response.length === 0) throw Error('name not found')
        return response
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getClientByName