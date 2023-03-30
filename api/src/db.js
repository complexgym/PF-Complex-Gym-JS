const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config();

// MODELS
const {
	Activities,
	Admin,
	Blog,
	Client,
	Trainer,
	Memberships,
	Testimonials,
	Plans,
	Mercadopago,
	CalendarDate,
} = require("./models/index");

// 5432
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const { DB_DEPLOY } = process.env;

// const db = new Sequelize(
// 	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
// 	{
// 		logging: false, // set to console.log to see the raw SQL queries
// 		native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// 	}
// );

const db = new Sequelize(DB_DEPLOY, { logging: false, native: false });

Activities(db);
Admin(db);
Blog(db);
Client(db);
Trainer(db);
Memberships(db);
Testimonials(db);
Plans(db);
Mercadopago(db);
CalendarDate(db);

const {
	activities,
	admin,
	testimonials,
	blog,
	client,
	trainer,
	memberships,
	plans,
	mercadopago,
	calendardate,
} = db.models; // falta charlar con los chicos de front blog y memberships

activities.belongsToMany(client, { through: "ActivitiesClient" });
client.belongsToMany(activities, { through: "ActivitiesClient" });

// client.hasMany(mercadopago);
// mercadopago.belongsTo(client);

trainer.belongsToMany(activities, { through: "ActivitiesTrainer" });
activities.belongsToMany(trainer, { through: "ActivitiesTrainer" });

trainer.hasMany(blog);
blog.belongsTo(trainer);

module.exports = {
	...db.models,
	conn: db,
};
