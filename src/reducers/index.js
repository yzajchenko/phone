const initialState = {
    phones : []
}

const reducers = (state=initialState, action) =>{
    switch (action.type){
        case 'PHONE_LOADED':
            return{
               phones: action.payload
            }; 
        default : 
            return state;
    }
}

export default reducers;