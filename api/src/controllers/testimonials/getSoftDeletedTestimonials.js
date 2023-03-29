const { testimonials } = require('../../db');

const getSoftDeletedTestimonials = async () => {
  return await testimonials.findAll({ 
    paranoid: false,
    where: { 
      deletedAt: { 
        [Op.not]: null 
      }
    } 
  });
}

module.exports = getSoftDeletedTestimonials;