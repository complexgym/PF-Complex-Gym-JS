const {calendardate} = require('../../db')
/**
 * 
 * @param {{day:number, month:number, year:number, hour:string, class:string}} activitysClass 
 */
const postCalendar = async (activitysClass)=>{
    try {
        const newDateCalendar = await calendardate.create(activitysClass)
        return newDateCalendar
    } catch (error) {
        // console.log(error)
        return {error}
    }
}

module.exports = postCalendar