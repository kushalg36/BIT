const initState = {
    authtoken:'',
    username:''
}

const rootReducer = (state = initState, action) => {

    if(action.type === "authtoken")
    {
        let newtoken = action.authtoken;
        return {
            ...state,
            authtoken: newtoken
        }
    }
    if(action.type === "username")
    {
        let username = action.username;
        return {
            ...state,
            username: username
        }
    }
    return state;
}


export default rootReducer;