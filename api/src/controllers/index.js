// Activities
const getActivitiesById = require("./activities/getActivitiesById")
const getActivitiesByName = require("./activities/getActivitiesByName")
const getAllActivities = require("./activities/getAllActivities")
const postActivities = require("./activities/postActivities")
const editActivities = require("./activities/editActivities")
const deleteActivities = require("./activities/deleteActivities")
const restoreActivities = require("./activities/restoreActivities")
const getSoftDeletedActivities = require("./activities/getSoftDeletedActivities")
// Admin
const deleteAdmin = require("./admin/deleteAdmin")
const getAllAdmins = require("./admin/getAllAdmins")
const postAdmin = require("./admin/postAdmin")
const putAdmin = require("./admin/putAdmin")
const restoreAdmin = require("./admin/restoreAdmin")
const getSoftDeletedAdmin = require("./admin/getSoftDeletedAdmin")
// Client
const deleteClient = require("./clients/deleteClient")
const getAllClients = require("./clients/getAllClients")
const getClientById = require("./clients/getClientById")
const getClientByName = require("./clients/getClientByName")
const postClient = require("./clients/postClient")
const updateClientById = require("./clients/updateClientById")
const restoreClient = require("./clients/restoreClient")
const getSoftDeletedClient = require("./clients/getSoftDeletedClient")
//Mail
const sendMail = require('./mails/sendMail')
// Memberships
const getAllMemberships = require("./memberships/getAllMemberships");
const postMemberships = require("./memberships/postMemberships");
const deleteMemberships = require("./memberships/deleteMemberships");
const updateMemberships = require("./memberships/updateMemberships");
const getMembershipsById = require("./memberships/getMembershipsById")
// Payments
const getFeedback = require("./payments/getFeedback")
const postNotification = require("./payments/postNotification")
const postPayments = require("./payments/postPayments")
const getAllPayments = require("./payments/getAllPayments")
const getPaymentsById =require("./payments/getPaymentsById")
const getAllCalendar = require('./calendar/getAllCalendars')
const postCalendar = require('./calendar/postCalendar')
// Plans
const deletePlans = require("./plans/deletePlans")
const getAllPlans = require("./plans/getAllPlans")
const postPlans = require("./plans/postPlans")
const updatePlans = require("./plans/updatePlans")
// Publications
const createPublication = require("./publications/createPublication")
const deletePublication = require("./publications/deletePublication")
const editPublication = require("./publications/editPublication")
const getAllPublications = require("./publications/getAllPublications")
const getPublicationsByID = require("./publications/getPublicationsByID")
const getPublicationsByName = require("./publications/getPublicationsByName")
const restorePublication = require("./publications/restorePublication")
const getSoftDeletedPublication = require("./publications/getSoftDeletedPublication")
const filters = require('./publications/filters')
// Testimonials
const getAllTestimonials = require("./testimonials/getAllTestimonials")
const deleteTestimonials = require("./testimonials/deleteTestimonials")
const postTestimonials = require("./testimonials/postTestimonials")
const putTestimonials = require("./testimonials/putTestimonials") 
const restoreTestimonials = require("./testimonials/restoreTestimonials")
const getSoftDeletedTestimonials = require("./testimonials/getSoftDeletedTestimonials")
// Trainer
const deleteTrainer = require("./trainer/deleteTrainer")
const restoreTrainer = require("./trainer/restoreTrainer")
const postTrainer = require("./trainer/postTrainer")
const getTrainerByName = require("./trainer/getTrainerByName")
const editTrainer = require("./trainer/editTrainer")
const getAllTrainers = require("./trainer/getAllTrainers")
const getTrainerById = require("./trainer/getTrainerById")
const getSoftDeletedTrainers = require("./trainer/getSoftDeletedTrainers")



module.exports = {
    // Activities
    getActivitiesById,
    getActivitiesByName,
    getAllActivities,
    postActivities,
    editActivities,
    deleteActivities,
    restoreActivities,
    getSoftDeletedActivities,
    // Admin
    deleteAdmin,
    getAllAdmins,
    postAdmin,
    putAdmin,
    restoreAdmin,
    getSoftDeletedAdmin,
    //Calendar
    getAllCalendar,
    postCalendar,
    // Client
    deleteClient,
    getAllClients,
    getClientById,
    getClientByName,
    postClient,
    restoreClient,
    updateClientById,
    getSoftDeletedClient,
    // Memberships
    getAllMemberships,
    postMemberships,
    deleteMemberships,
    updateMemberships,
    getMembershipsById,
    //Mail
    sendMail,
    // Payments
    postPayments,
    getFeedback,
    getAllPayments,
    getPaymentsById,
    getFeedback,
    postNotification,
    // Plans
    deletePlans,
    getAllPlans,
    postPlans,
    updatePlans,
    // Publications
    createPublication,
    deletePublication,
    editPublication,
    getAllPublications,
    getPublicationsByID,
    getPublicationsByName,
    restorePublication,
    getSoftDeletedPublication,
    filters,
    // Testimonials
    getAllTestimonials,
    deleteTestimonials,
    postTestimonials,
    putTestimonials,
    restoreTestimonials,
    getSoftDeletedTestimonials,
    // Trainer
    deleteTrainer,
    postTrainer,
    getTrainerByName,
    editTrainer,
    getAllTrainers,
    getTrainerById,
    restoreTrainer,
    getSoftDeletedTrainers
}

