const express = require('express');
const router = express.Router();
const multer = require('multer');
const signUpQuery = require('../query/signUpQuery')


var storage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
            cb(null, "./public/images/")
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + file.originalname);
        }
    }
)
var upload = multer({ storage });
router.post('/',(req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    // const file = req.files.profileimage[0].filename;
    console.log(name,email,password);
   signUpQuery.insertsignupData(req.body);

})


module.exports = router;