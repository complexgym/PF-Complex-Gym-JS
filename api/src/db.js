const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config();

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
	PaymentsinCash,
} = require("./models/index");

const { DB_DEPLOY } = process.env;


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
PaymentsinCash(db);

const {
	activities,
	blog,
	client,
	trainer,
} = db.models;

activities.belongsToMany(client, { through: "ActivitiesClient" });
client.belongsToMany(activities, { through: "ActivitiesClient" });


trainer.belongsToMany(activities, { through: "ActivitiesTrainer" });
activities.belongsToMany(trainer, { through: "ActivitiesTrainer" });

trainer.hasMany(blog);
blog.belongsTo(trainer);

module.exports = {
	...db.models,
	conn: db,
};
