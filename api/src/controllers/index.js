const getActivitiesById = require("./activities/getActivitiesById")
const getActivitiesByName = require("./activities/getActivitiesByName")
const getAllActivities = require("./activities/getAllActivities")
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
const filterByDate = require('./publications/filterByDate')
const filterByTag = require('./publications/filterByTag')


module.exports = {
    getActivitiesById,
    getActivitiesByName,
    getAllActivities,
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
    filterByDate,
    filterByTag
}