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
    updateClientById
}