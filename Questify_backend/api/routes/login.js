const express = require ('express');
const router = express.Router();
const loginQuery = require('../query/loginQuery');

console.log("------------------");
// Define a route to handle login
router.post('/', (req, res,next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email,password);
  res = loginQuery.checkloginData(req.body, res);
  
});
module.exports = router;