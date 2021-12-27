const jwt = require('jsonwebtoken');
const db = require('../model/db');
const nodemailer = require('nodemailer');
const register = function (req, res, next) {
  const userdata = {
    id: req.body.id,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  db.query('INSERT INTO accounts SET ?', [userdata], (err, result) => {
    if (err) {
      res.send("already exists")
    } else {
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "vennala917@gmail.com",
          pass: 'Sruthi@123'
        }
      })
      const options = {
        from: "vennala917@gmail.com",
        to: req.body.email,
        subject: 'thank you for registering',
        text: `Hi ${req.body.username}
        Thank you for registering in HMS booking system`
      }
      transport.sendMail(options, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("email sent successfully");
        }
      })
      res.send('user added successfully')
    }
  })
}
//login
const login = ((req, res) => {
  const email = req.body.email;
  const Password = req.body.password;
  const id = req.body.id
  const data = "select * from accounts where email ='" + email + "'and password = '" + Password + "'"
  console.log(data);
  db.query(data, (err, results) => {
    if (!results) {
      res.send("wrong details");
    }
    else {
      let token = jwt.sign({ id: results[0].id }, "sruthi123", { expiresIn: '10m' });
      res.send(token);
    }
  })
})

const userinfo = (req, res) => {
  db.query("SELECT * from accounts where id='" + `${req.user.id}` + "'", (err, result) => {
    if (err) {
      res.send("profile not found")
    } else {
      res.send(result)
    }
  })
}
module.exports = {
  register,
  login,
  userinfo
}