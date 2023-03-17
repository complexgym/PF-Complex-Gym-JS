const { client, activities } = require("../../db")


const postClient = async ({ 
    user,
    name,
    lastName,
    dni,
    picture,
    height,
    weight,
    age,
    phone,
    mail,
    adress,
    city,
    region,
    postalCode,
    activitie,
    routine,
    about }) => {

    const active = true
    const debt = false
    const debtAmount = 0

    const newClient = await client.create({
        user,
        name,
        lastName,
        dni,
        picture,
        height,
        weight,
        age,
        phone,
        mail,
        adress,
        city,
        region,
        postalCode,
        activitie,
        routine,
        about,
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