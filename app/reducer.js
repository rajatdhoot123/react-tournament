import action from './action.js'

export const userLogin = (state= { auth: false , id : null}, action) => {
    switch(action.type) {
        case 'USER_LOGIN' :
        return Object.assign({}, state, {
            auth: action.auth,
            id : action.id
        })
        default:
        return state;
    }
}
export const userSignup = (state= { auth: false }, action) => {
    switch(action.type) {
        case 'USER_SIGNUP' :
        return Object.assign({}, state, {
            auth: action.auth
        })
        default:
        return state;
    }
}
export const displayTournament = (state = {tournament_data:null, isData: false}, action) => {
    switch(action.type) {
        case 'DISPLAY_TOURNAMENT' :
        return Object.assign({},state, {
            tournament_data: action.tournament_data,
            isData: action.isData
        })
        default:
        return state;
    }
}
