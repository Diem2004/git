// import  express from "express";
// import homeController from '../Controller/homeController';
import pool from "../configs/connectDB";
import connection from "../configs/connectDB";
let getHomepage = async(req, res) => {
    // simple query
    let data = [];
  connection.query(
 'SELECT * FROM `diễm` ',
   function(err, results, fields) {
     
     results.map((row)=>{
        data.push({
        id: row.id,
        email: row.email,
        adress: row.adress,
        firstName:row.firstName,
        lastName: row.lastName
     })
    });
  
    return res.render('index.ejs',{dataUser : data, test: 'abc string test'})
   })

 
 //console.log('>>>check data:', typeof (data), JSON.stringify(data))
 //return res.render('test/index.ejs',{dataUser : JSON.stringify(data)})

}
 let getDetailPage = async (req, res) => {
  let userId = req.params.id;
  let user = await pool.execute(`select * from diễm where id = ?`, [userId]);

  return res.send(JSON.stringify(user[0]))
   
   
   
 }
module.exports = {
    getHomepage, getDetailPage
}
 
 