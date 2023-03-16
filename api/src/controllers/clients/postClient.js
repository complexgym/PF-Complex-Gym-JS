const { client, activities } = require("../../db")

/*const postClient = async (req, res) => {
    try {
        const {
            user,
            name,
            dni,
            avatar,
            height,
            weight,
            age,
            phone, 
            mail,
            adress,
            activitie,
            routine
        } = req.body

        const active = true
        const debt = false
        const debtAmount = 0

        const newClient = await client.create({
            user,
            name,
            dni,
            avatar,
            height,
            weight,
            age,
            phone, 
            mail,
            adress,
            routine,
            active,
            debt,
            debtAmount
        })

        const Activities = await activities.findAll({
            where: {
                name : activitie
            }
        })
        await newClient.addactivities(Activities)/

        res.status(200).send(newClient)

    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = postClient
*/

const postClient = async ({ user,
    name,
    dni,
    avatar,
    height,
    weight,
    age,
    phone,
    mail,
    adress,
    // activitie,
    routine }) => {
    const active = true
    const debt = false
    const debtAmount = 0

    const newClient = await client.create({
        user,
        name,
        dni,
        avatar,
        height,
        weight,
        age,
        phone,
        mail,
        adress,
        routine,
        active,
        debt,
        debtAmount
    })
    /*
    const Activities = await activities.findAll({
            where: {
                name : activitie
            }
        })
        await newClient.addactivities(Activities)/
    */

    return newClient
}

module.exports = postClient