import { combineReducers } from 'redux';
import articlesReducer from './ticketsReducer';

export default combineReducers({
    articlesReducer: articlesReducer
});