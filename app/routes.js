const express = require('express')
const router = express.Router()
const hrteam = require('./hrteam.js')
const validate = require('./validate.js')

// Add your routes here - above the module.exports line

router.get('/hr', (req, res) => {
    res.render('hrpage')
})

router.get('/addemployee', (req, res) =>{
    res.render('addemployee')
})

router.post('/empadded', async (req, res) => {
    var emp = req.body;
    let validation_output = employee(emp)

    if(validation_output === true){
        let insertedKey = await hrteam.addEmp(emp)
        res.render('empadded')
    }else{
        // res.locals.errormessage = validation_output
        res.render('addemployee', {errormessage: validation_output})
    }

})

router.get('/empadded', (req, res) =>{
    res.render('empadded')
})

// router.get('/addsalesemp', (req, res) =>{
//     res.render('addsalesemp')
// })

module.exports = router
























function employee(emp){
    if(emp.Postcode.length > 8){
        return "INVALID INPUT: Postcode is too long"
    }
    if(emp.Lname.length > 50){
        return "INVALID INPUT: Last Name is too long"
    }
    if(emp.Fnamelength > 30){
        return "INVALID INPUT: First Name is too long"
    }
    if(emp.City.length > 50){
        return "INVALID INPUT: City name is too long"
    }
    if(emp.StreetAddress.length > 100){
        return "INVALID INPUT: Street address name is too long"
    }
    if(emp.SortCode.length > 8){
        return "INVALID INPUT: Sort code is too long"
    }
    if(emp.BAN.length > 8){
        return "INVALID INPUT: Bank account number is too long"
    }
    if(emp.Salary < 0){
        return "INVALID INPUT: Salary cannot be negative"
    }
    if(emp.NIN.length > 9){
        return "INVALID INPUT: NIN is too long"
    }
    if(emp.Department.length > 10){
        return "INVALID INPUT: Department name is too long"
    }
    if(emp.Department.length === 0){
        return "INVALID INPUT: Department cannot be empty"
    }
    if(emp.Fname.length === 0){
        return "INVALID INPUT: First name cannot be empty"
    }
    if(emp.Lname.length === 0){
        return "INVALID INPUT: Last name cannot be empty"
    }
    if(emp.Salary.length === 0){
        return "INVALID INPUT: Salary cannot be empty"
    }
    if(emp.City.length === 0){
        return "INVALID INPUT: City cannot be empty"
    }
    if(emp.Postcode.length === 0){
        return "INVALID INPUT: Postcode cannot be empty"
    }
    if(emp.StreetAddress.length === 0){
        return "INVALID INPUT: Street address cannot be empty"
    }
    if(emp.SortCode.length === 0){
        return "INVALID INPUT: Sort code cannot be empty"
    }
    if(emp.BAN.length === 0){
        return "INVALID INPUT: Bank account number cannot be empty"
    }
    if(emp.NIN.length === 0){
        return "INVALID INPUT: NIN cannot be empty"
    }
    for(let i = 0; i < 10; i++){
        if(emp.Fname.includes('' + i)){
            return "INVALID INPUT: First Name cannot have any numbers in it"
        }
    }
    for(let i = 0; i < 10; i++){
        if(emp.Lname.includes('' + i)){
            return "INVALID INPUT: Last Name cannot have any numbers in it"
        }
    }
    for(let i = 0; i < 10; i++){
        if(emp.City.includes('' + i)){
            return "INVALID INPUT: City cannot have any numbers in it"
        }
    }
    for(let i = 0; i < 10; i++){
        if(emp.Department.includes('' + i)){
            return "INVALID INPUT: Department cannot have any numbers in it"
        }
    }
    for(let i = 0; i < emp.SortCode.length; i++){
        if((/[a-zA-Z]/).test(emp.SortCode[i])){
            return "INVALID INPUT: Sort code cannot have letters in it"
        }
    }
    for(let i = 0; i < emp.BAN.length; i++){
        if((/[a-zA-Z]/).test(emp.BAN[i])){
            return "INVALID INPUT: Bank account number cannot have letters in it"
        }
    }
    for(let i = 0; i < emp.Salary.length; i++){
        if((/[a-zA-Z]/).test(emp.Salary[i])){
            return "INVALID INPUT: Salary cannot have letters in it"
        }
    }

    return true;
}