const { client } = require('../../db')

/**
 * 
 * @param {string} id 
 * @param {{
 * id: string,
 *  user: string,
 *  password: string,
 *  name: string,
 *  dni:  number,
 *  avatar: string,
 *  height: number,
 *  weight: number,
 *  age: number,
 *  phone: number, 
 *  mail: string,
 *  adress: string,
 *  active: boolean,
 *  debt: boolean,
 *  debtAmount: number,
 *  routine: string
 * }} newData 
 */
const updateClientById = async (id, newData) => {
    try {
        const responseUpdate = await client.update(newData, {
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


module.exports = updateClientById