
const usernamevalid = (req, res, next) => {
    const username = req.body.username;
    if (username.length == null || username.length == '') {
        res.send("username should be morethan 3")
    } else {
        next();
    }
}
const validateEmail = (req, res, next) => {
    const email = req.body.email
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (reg.test(email)) {
        next();
    }
    else {
        res.send("invalid email");
    }
}
/*
const emailverify = (req, res) => {
    const data={
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    }
    Verifier.Verifier(data, (err, data) => {
        if (err){
            res.send(err)
        } else{
        next();
    }
})
}*/

const validatePassword = (req, res, next) => {
    const password = req.body.password;
    if (password.length == null || password.length == '') {
        res.send("password should not be null")
    }
    else {
        next();
    }
}
const validEmail = (req, res, next) => {
    const email = req.body.email
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (reg.test(email)) {
        next();
    }
    else {
        res.send("invalid email");
    }
}
const validPassword = (req, res, next) => {
    const password = req.body.password;
    console.log(password.length)
    if (password.length == null || password.length == '') {
        res.send("password should not ne null")
    }
    else {
        next();
    }
}
const jwt = require('jsonwebtoken');
const userinfo = ((req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.send("you are not authorized");
    } else {
        jwt.verify(token, 'sruthi123', (err, result) => {
            if (err) {
                res.send("invalid token");
            } else {
                console.log(result);
                req.user = result;
                next();
            }
        })
    }
})
module.exports = {
    usernamevalid,
    validateEmail,
    validatePassword,
    validEmail,
    validPassword,
    userinfo
}