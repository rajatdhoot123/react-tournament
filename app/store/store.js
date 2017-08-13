import { createStore } from 'redux';
import { userLogin, userSignup, displayTournament} from '../reducer.js';
import { combineReducers } from 'redux';

const store = createStore(combineReducers({
    user: userLogin,
    user_signup: userSignup,
    display_tournament: displayTournament
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;
