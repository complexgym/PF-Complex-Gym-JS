const { testimonials } = require("../../db")

const restoreTestimonials = async ({id}) => {
  try {
    const [restoredRows] = await testimonials.restore({
      where: {
        id: id
      }
    })
    if (restoredRows === 0) {
      return "testimony not found or already restored"
    }
    return "testimony restored successfully"
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = restoreTestimonials;