const express = require('express');
const router = express.Router();
const validate=require('../middlewares/usermiddleware');
const validate1=require('../middlewares/clinicmiddleware');
const Controller=require('../controllers/usercontroller');
const Controller1=require('../controllers/cliniccontroller');
router.post('/register',validate.usernamevalid,validate.validateEmail,validate.validatePassword,Controller.register)
router.post('/login',validate.validEmail,validate.validPassword,Controller.login);
router.get('/userinfo',validate.userinfo,Controller.userinfo);
router.post('/cliniclist',validate.userinfo,validate1.idvalid,validate1.namevalid,validate1.validtime,validate1.validfee,Controller1.addclinic)
router.get('/clinic',validate.userinfo,Controller1.clinic)
router.delete('/deleteclinic/:id',validate.userinfo,Controller1.deleteclinic)
router.put('/updateclinic',validate.userinfo,Controller1.updateclinic)
module.exports=router;