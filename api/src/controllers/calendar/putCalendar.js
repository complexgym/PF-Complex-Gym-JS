const { calendardate } = require("../../db")
/**
 * 
 * @param {{day:number, month:number, year:number, hour:string, description:string}} activity 
 * @param {{id:uuidv4}} id
 */

const putCalendar = async (activity, id) => {
    try {
        
        console.log(activity)
        const updatedCalendar = await calendardate.update(activity, {
            where:{
                id: id.id
            }
        })
        
        if (updatedCalendar[0] === 0) throw Error('id not found')
        const result = await calendardate.findByPk(id.id)

        return result
    } catch (error) {
        console.log(error)
        return(error)
    }
}


module.exports = putCalendar