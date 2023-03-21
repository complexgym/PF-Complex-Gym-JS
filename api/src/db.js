const dotenv = require('dotenv') 
const { Sequelize } = require('sequelize') 
dotenv.config()

// MODELS
const {
    Activities,
    Admin,
    Blog,
    Client,
    Payments,
    Trainer,
    Memberships 
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

Activities(db)
Admin(db)
Blog(db)
Client(db)
Payments(db)
Trainer(db)
Memberships(db)


const {activities, admin, blog, client, payments, trainer, memberships} = db.models // falta charlar con los chicos de front blog y memberships

activities.belongsToMany(client, {through: 'ActivitiesClient'})
client.belongsToMany(activities, {through: 'ActivitiesClient'})

client.hasMany(payments)
payments.belongsTo(client)

trainer.belongsToMany(activities, {through: 'ActivitiesTrainer'})
activities.belongsToMany(trainer, {through: 'ActivitiesTrainer'})

trainer.hasMany(blog)
blog.belongsTo(trainer)

module.exports = { 
    ...db.models,
    conn: db
}