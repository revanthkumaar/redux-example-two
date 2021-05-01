import * as actionTypes from './actionTypes'


export const createBook = (book) => {
    //return action
    return {
        //unique identifier
        type: actionTypes.CREATE_BOOK_SUCCESS,
        //payload
        book:book
    }
}