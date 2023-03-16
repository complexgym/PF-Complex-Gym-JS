const { client, activities } = require("../../db")


const postClient = async ({ 
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
        activitie,
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
    we need to wait for createActivitie to add this*/ 

    return newClient
}

module.exports = postClient