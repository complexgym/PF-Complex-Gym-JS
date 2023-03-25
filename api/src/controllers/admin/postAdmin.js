const { admin } = require("../../db")


const postAdmin = async (req, res) => {
    try {
        const {
            user,
            name,
            lastName,
            picture,
            permits
        } = req.body

        if(!find){
            const newAdmin = await admin.create({
                user,
                name,
                lastName,
                picture,
                permits
            })
    
            res.status(200).send(newAdmin)
        }

        else{
            throw new Error('User is already admin')
        }
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = postAdmin