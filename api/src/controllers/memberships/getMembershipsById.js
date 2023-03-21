const {memberships} = require('../../db')

const getMembershipsById = async(id)=>{
    try {
        console.log(id)
        const response = await memberships.findByPk(id)

        if (response.length === 0) throw Error('ID not found')
        return response
    } catch (error) {
        return {error: error.message}
    }
}



module.exports = getMembershipsById