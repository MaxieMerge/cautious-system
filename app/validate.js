function employee(emp){
    var alphabet = [];

    for(i = 9 , alphabet=''; ++i < 36;){
        alphabet[i-9] = i.toString(36)
        // alphabet.push(i.toString(36))
    }


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
        return "INVALID INPUT: Departament name is too long"
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

    for(let i = 0; i < alphabet.length; i++){
        if(emp.SortCode.inlcudes(alphabet[i])){
            return "INVALID INPUT: Sort code cannot have letters in it"
        }
    }

    for(let i = 0; i < alphabet.length; i++){
        if(emp.BAN.inlcudes(alphabet[i])){
            return "INVALID INPUT: Bank account number cannot have letters in it"
        }
    }

    for(let i = 0; i < alphabet.length; i++){
        if(emp.Salary.inlcudes(alphabet[i])){
            return "INVALID INPUT: Salary cannot have letters in it"
        }
    }

    return true;
}