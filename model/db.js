const mysql=require('mysql')
const db = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '123456789',
	database : 'nodelogin'
});
db.connect((err)=>{
    if(err){
        console.log(err)
    } else {
        console.log("mysql connected..")
    }
});
module.exports = db; 