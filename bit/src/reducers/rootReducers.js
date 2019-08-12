const initState = {
    authtoken:''
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    return state;
}


export default rootReducer;