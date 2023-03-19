const { blog } = require("../../db")

const getPublicationsByName = async (req, res) => {
    try {
        const { title, tag, date } = req.query
        console.log("getname")
        const allPublications = await blog.findAll({})

        let publicationName = await allPublications?.filter(el => el.title.toLowerCase().includes(title.toLowerCase()))
        
        if (tag){
            publicationName = publicationName.filter(blog => blog.tag.includes(tag))
        } 

        //*NICO
        if (date){
            if(date === 'ancient'){
                publicationName = publicationName.sort((a,b)=>{
                    return a.createdAt.getTime() - b.createdAt.getTime()
                })
            } else if(date === 'recent'){
                publicationName = publicationName.sort((a,b)=>{
                    return b.createdAt.getTime() - a.createdAt.getTime()
                })
            }
        }
        res.status(200).send(publicationName)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({error:error.message})
    }
}

module.exports = getPublicationsByName