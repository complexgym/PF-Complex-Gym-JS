const { calendardate } = require('../../db')

/**
 * 
 * @param {{day: number, month: number, year: number}} date 
 * @returns 
 */
const getAllCalendar = async (date) => {
    try {
        let querys = false

        if(
            Object.keys(date).length === 3 &&
            date.day &&
            date.month &&
            date.year
        ) querys = true

        if (querys){
            const response = await calendardate.findAll({
                where: {
                    day: date.day,
                    month: date.month,
                    year: date.year
                }
            })

            // if (response.length === 0) throw Error('date of calendar not found')
            return response
        }

        const response = await calendardate.findAll()

        // if (response.length === 0) throw Error('date of calendar not found')
        return response
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
}

module.exports = getAllCalendar