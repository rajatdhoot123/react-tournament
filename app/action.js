export const userLogin = (userLoginState,id) => {
    return {
        type : 'USER_LOGIN',
        id : id,
        auth : userLoginState
    };
}
export const userSignup = (addUser) => {
    return {
        type : 'USER_SIGNUP',
        auth : addUser
    }
}
export const displayTournament = (data) => {
    return {
        type : 'DISPLAY_TOURNAMENT',
        tournament_data : data,
        isData: true
    }
}
