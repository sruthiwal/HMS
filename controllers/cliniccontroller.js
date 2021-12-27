const jwt = require('jsonwebtoken');
const db = require('../model/db');
//post
const addclinic = function (req, res) {
    const add = {
        doctor_id: req.body.doctor_id,
        DoctorName: req.body.DoctorName,
        IsAvailable: req.body.IsAvailable,
        TimeSlot: req.body.TimeSlot,
        Fee: req.body.Fee,
        CreatedAt: new Date(),
        CreatedBy: `${req.user.id}`
    }
    db.query('INSERT INTO clinic_management SET?', add, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result);
        }
    })
}
//get
const clinic = (req, res) => {
    var sql="select accounts.Id,accounts.userName, clinic_management.Id,clinic_management.doctor_id,clinic_management.DoctorName,clinic_management.Isavailable,clinic_management.TimeSlot,clinic_management.Fee,clinic_management.CreatedAt from accounts inner join clinic_management on accounts.Id=clinic_management.Id where accounts.Id='"+`${req.user.id}`+"'";
    db.query(sql,(err,result)=>{
        if (err) {
            res.send(err)
        } else {
            res.send(result);
        }
    })
}
/*get
const clinic = (req, res) => {
    var sql = "select * from clinic_management inner join accounts on accounts.id=clinic_management.id where accounts.id='" + `${req.user.id}` + "'"
    db.query(sql, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result);
        }
    });
}*/
//delete
const deleteclinic = (req, res) => {
    const doctor_id = req.body.doctor_id;
    db.query("delete from clinic_management where doctor_id='" + doctor_id + "'", (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send("deleted");
        }
    })
}
/*
const deleteclinic = (req, res) => {
    db.query("DELETE FROM clinic_management WHERE doctor_id=31", function (err, result, fields) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    });
}*/
const updateclinic=(req,res)=>{
    var sql = "UPDATE clinic_management SET Fee=300";
    db.query(sql, function (err, result) {
      if (err){
          res.send(err)
      }{
          res.send(result)
      }
    });
  }
module.exports = {
    addclinic,
    clinic,
    deleteclinic,
    updateclinic
}
