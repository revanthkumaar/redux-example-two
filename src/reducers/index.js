import {combineReducers} from 'redux-redux';
import {bookReducers} from './bookReducers'

export default combineReducers({
    book:bookReducers
});