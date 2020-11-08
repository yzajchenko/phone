const phoneLoaded = (data) =>{
    return{
        type: 'PHONE_LOADED',
        payload: data
    }
}

export {phoneLoaded};
