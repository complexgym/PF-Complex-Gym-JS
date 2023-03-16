const dotenv = require('dotenv') 
const { Sequelize } = require('sequelize') 
dotenv.config()

// MODELS
const {
    activities,
    admin,
    blog,
    client,
    payments,
    trainer,
    memberships 
} = require("./models/index")

// 5432
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env

const db = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
       logging: false, // set to console.log to see the raw SQL queries
       native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);

activities(db)
admin(db)
blog(db)
client(db)
payments(db)
trainer(db)
memberships(db)


const {activities, blog, client, payments, trainer, memberships} = db.models // falta charlar con los chicos de front blog y memberships

activities.belongsToMany(client, {through: 'ActivitiesClient'})
client.belongsToMany(activities, {through: 'ActivitiesClient'})

client.hasMany(payments)
payments.belongsTo(client)

trainer.belongsToMany(activities, {through: 'ActivitiesTrainer'})
activities.belongsToMany(trainer, {through: 'ActivitiesTrainer'})

trainer.hasMany(publication)
publication.belongsTo(trainer)

module.exports = { 
    ...db.models,
    conn: db
}