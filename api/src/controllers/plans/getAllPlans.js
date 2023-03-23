const {plans} = require('../../db')

const getAllPlans = async()=>{
    try {
        const response = await plans.findAll()

        if (response.length === 0) throw Error('Plans not found')
        return response
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getAllPlans