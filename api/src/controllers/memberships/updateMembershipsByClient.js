const { memberships } = require("../../db");

const updateMemberships = async (id, newDate) => {
    try {
        const responseUpdate = await memberships.update(newDate, {
            where: {
                clientId: id
            }
        })
 
        if (responseUpdate[0] === 0) throw Error('Client not found')
    } catch (error) {
        return {error: error.message}
    }
 }
 
 
 module.exports = updateMemberships