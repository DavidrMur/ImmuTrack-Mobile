const entryValidation = (e, type) => {

    switch(type){
        case 'username':
            return usernameValidation(e.target.value)
        case 'password':
            return passwordValidation(e.target.value)
        case 'scn':
            return scnValidation(e.target.value)         
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
    } else return true
}

const passwordValidation = (value) => {

    if(value.length < 8){
        return false;
    } else return true
}

const scnValidation = (value) => {
    if (value.length < 9) {
        return false;
    } else return true
}

export default entryValidation;