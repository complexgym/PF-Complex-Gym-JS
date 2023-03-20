const {memberships} = require('../../db')

const getAllMemberships = async()=>{
    try {
        const response = await memberships.findAll()

        if (response.length === 0) throw Error('Memberships not found')
        return response
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getAllMemberships