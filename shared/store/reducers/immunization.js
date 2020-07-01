import * as actionTypes from '../actions/actionTypes';

const initialState = {
    healthcare: {
        patients: [
            {'id': '1234', 'name': 'John Doe', 'DOB': 'Dec-31-1998', 'OHIP': '123456'},
            {'id': '1235', 'name': 'Jane Doe', 'DOB': 'Dec-31-1998', 'OHIP': '654321'}],
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer