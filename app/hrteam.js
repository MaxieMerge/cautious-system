const mysql = require('mysql'); 
const dbconfig = require('./dbconfig.json'); 
const util = require ('util')
const db = wrapDB(dbconfig)

function wrapDB (dbconfig) { 
    const pool = mysql.createPool(dbconfig) 
    return { 
        query(sql, args) { 
            console.log("in query in wrapper") 
            return util.promisify( pool.query ) 
            .call(pool, sql, args) 
        }, 
        release () { 
            return util.promisify( pool.releaseConnection ) 
            .call( pool ) 
        } 
    } 
 }

 
 getEmpInDept = async ( department ) => { 
    return await db.query( 
        "SELECT EmployeeID, ProjectID, CONCAT(Fname + ' ' + Lname) as Name, City, Postcode, StreetAddress, SortCode, BAN, Salary, NIN" 
        + " FROM Employee WHERE Department = ?", 
                            [department]) 
 }

 exports.getEmps = async (department) => {
        return await getEmpInDept(department);
 }

 exports.addEmp = async (newEmp) => { 
    let results = await db.query('INSERT INTO Employee SET ?', newEmp) 
    return results.insertId; 
 }