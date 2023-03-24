const { admin } = require("../../db")


const putAdmin = async (req, res) => {
    try {

        const { id } = req.params;
        
        const { 
            user,
            name,
            lastName,
            picture,
            permits
        } = req.body;
    
    
        await admin.update({
                user,
                name,
                lastName,
                picture,
                permits
            }, {
            where:{
                id: id
            }
        })
    
        res.status(200).send("Admin succesfully modificated")
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}


module.exports = putAdmin