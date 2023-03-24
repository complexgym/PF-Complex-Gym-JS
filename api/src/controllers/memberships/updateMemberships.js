const { memberships } = require("../../db");

/**
 * 
 * @param {string} id 
 * @param {{
* clientId:String,
*    planName:String,
 *   activities:String,
*    price:Number,
*    startDate:Date,
*    finishDate:Date,
*    paymentId:String,
* }} newMemberships 
*/
const updateMemberships = async (id, newMemberships) => {
   try {
       const responseUpdate = await memberships.update(newMemberships, {
           where: {
               clientId: id
           }
       })

       if (responseUpdate[0] === 0) throw Error('Client not found')

       const responseResult = await memberships.findByPk(id)
       
       return responseResult
   } catch (error) {
       return {error: error.message}
   }
}


module.exports = updateMemberships