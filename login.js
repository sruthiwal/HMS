const Express = require('express');
const bodyParser = require("body-parser");
var router = Express.Router();
const app = Express();
const authrouter = require('./routes/user')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/', authrouter);
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});