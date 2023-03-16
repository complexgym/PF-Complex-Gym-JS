//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
// murio el buda

const server = require('./src/app.js');
const { conn } = require('./src/db.js');


conn.sync({ force: true }).then( async () => {
  server.listen(3001, () => {
    console.log('Listening at: http://localhost:3001/');
  })
})
.catch((error) => console.log(error.message))