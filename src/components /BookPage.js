import { ReactComponent } from '*.svg';
import React from 'react';

class Book extends React.Component{

    constructor(props){
        super(props);
    }

    submitBook(input){
        this.props.createBook(input);
    }


    render(){
        let textInput = null;


        return(
            <div>
                <h3>Books</h3>
                <ul>

                </ul>
            
            <div>
                <h3>Books listing form</h3>
                <form onSubmit={event => {
                    event.preventDefault();
                    var input = {title:titleInput};
                    this.submitBook(input);

                }}>

                <input type="text" name="title"/>
                <input type="submit"/>

                </form>
            </div>
            </div>

        )

    }


}


//map the centralized state to the properties of the Book component 

const mapStateToProps = (state,props) => {
    return {
        books:state.books
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        createBook: book => dispatch(bookActions.createBook(book))
    }
}


//map the actins to properties of book compo

export default connect(mapStateToProps,mapDispatchToProps)(Book);