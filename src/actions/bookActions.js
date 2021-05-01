export const createBook = (book) => {
    //return action
    return {
        //unique identifier
        type:'CREATE_BOOK',
        //payload
        book:book
    }
}