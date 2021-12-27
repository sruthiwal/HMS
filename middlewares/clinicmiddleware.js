//postvalidation
const idvalid = (req, res, next) => {
    const doctor_id = req.body.doctor_id;
    if (doctor_id == null || doctor_id == '') {
        res.send('invalid id')
    } else {
        next();
    }
}
const namevalid = (req, res, next) => {
    const DoctorName = req.body.DoctorName;
    if (DoctorName.length == null || DoctorName.length == '') {
        res.send("name should be morethan 3")
    } else {
        next();
    }
}
const validtime = (req, res, next) => {
    const TimeSlot = req.body.TimeSlot;
    if (TimeSlot == null || typeof (TimeSlot) == "timestamp") {
        res.send("write correct format")
    }
    else {
        next();
    }
}
const validfee = (req, res, next) => {
    const Fee = req.body.Fee;
    if (Fee.length == null || Fee.length == '') {
        res.send("error")
    }
    else {
        next();
    }
}
module.exports = {
    idvalid,
    namevalid,
    validtime,
    validfee
}