const { calendardate } = require("../../db")


const deleteCalendar = async (req, res) => {
    try {
        const { id } = req.params
        await calendardate.destroy({
            where: {
                id: id,
            }
        })

        res.status(200).send("Delete Succesfull")  
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = deleteCalendar