const getActivitiesById = require("./activities/getActivitiesById")
const getActivitiesByName = require("./activities/getActivitiesByName")
const getAllActivities = require("./activities/getAllActivities")
const postActivities = require("./activities/postActivities")
const editActivities = require("./activities/editActivities")
const deleteActivities = require("./activities/deleteActivities")
const deleteClient = require("./clients/deleteClient")
const getAllClients = require("./clients/getAllClients")
const getClientById = require("./clients/getClientById")
const getClientByName = require("./clients/getClientByName")
const postClient = require("./clients/postClient")
const updateClientById = require("./clients/updateClientById")
const createPublication = require("./publications/createPublication")
const deletePublication = require("./publications/deletePublication")
const editPublication = require("./publications/editPublication")
const getAllPublications = require("./publications/getAllPublications")
const getPublicationsByID = require("./publications/getPublicationsByID")
const getPublicationsByName = require("./publications/getPublicationsByName")
const deleteTrainer = require("./trainer/deleteTrainer")
const postTrainer = require("./trainer/getTrainerByName")
const getTrainerByName = require("./trainer/getTrainerByName")
const editTrainer = require("./trainer/editTrainer")
const getAllTrainers = require("./trainer/getAllTrainers")
const getTrainerById = require("./trainer/getTrainerById")
const filters = require('./publications/filters')


module.exports = {
    getActivitiesById,
    getActivitiesByName,
    getAllActivities,
    postActivities,
    editActivities,
    deleteActivities,
    deleteClient,
    getAllClients,
    getClientById,
    getClientByName,
    postClient,
    updateClientById,
    createPublication,
    deletePublication,
    editPublication,
    getAllPublications,
    getPublicationsByID,
    getPublicationsByName,
    deleteTrainer,
    postTrainer,
    getTrainerByName,
    editTrainer,
    getAllTrainers,
    getTrainerById,

    filters
}