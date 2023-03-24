const { plans } = require('../../db')

const updatePlans = async (id, newData) => {
    try {
        const responseUpdate = await plans.update(newData, {
            where: {
                id: id
            }
        })

        if (responseUpdate[0] === 0) throw Error('id not found')

        const responseResult = await client.findByPk(id)
        
        return responseResult
    } catch (error) {
        return {error: error.message}
    }
}


module.exports = updatePlans