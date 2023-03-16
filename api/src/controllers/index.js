const getActivitiesById = require("./activities/getActivitiesById")
const getActivitiesByName = require("./activities/getActivitiesByName")
const getAllActivities = require("./activities/getAllActivities")
const deleteClient = require("./clients/deleteClient")
const getAllClients = require("./clients/getAllClients")
const getClientById = require("./clients/getClientById")
const getClientByName = require("./clients/getClientByName")
const postClient = require("./clients/postClient")
const updateClientById = require("./clients/updateClientById")


module.exports = {
    getActivitiesById,
    getActivitiesByName,
    getAllActivities,
    deleteClient,
    getAllClients,
    getClientById,
    getClientByName,
    postClient,
    updateClientById
}