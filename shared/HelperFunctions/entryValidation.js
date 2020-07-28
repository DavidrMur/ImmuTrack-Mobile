const entryValidation = (e, type) => {
    debugger;

    switch(type){
        case 'username':
            return usernameValidation(e.target.value)
        case 'password':
            return passwordValidation(e.target.value)    
        case 'fName':
        case 'lName':   
        default:
            break;  
    }
}

const usernameValidation = (value) => {
    const re = /^\S*$/;

    if(value.length < 6 || !re.test(value)){
        return false;
    }
}

const passwordValidation = (value) => {

    if(value.length < 8){
        return false;
    }
}

export default entryValidation;