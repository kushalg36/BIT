const initState = {
    authtoken:''
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === "authtoken")
    {
        let newtoken = action.authtoken;
        return {
            ...state,
            authtoken: newtoken
        }
    }
    return state;
}


export default rootReducer;