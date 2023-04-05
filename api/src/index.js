const server = require('./app.js');
const { conn } = require('./db.js');

require('dotenv').config();

conn
  .sync({ force: false })
  .then(async () => {
    server.listen(process.env.PORT, () => {
      console.log(`Listening at: http://localhost:${process.env.PORT}/`);
    });
  })
  .catch((error) => console.log(error.message));
