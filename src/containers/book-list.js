import React, { Component } from 'react';
//when we use curly braces we pull only the required ppropert from the library.
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';//makes sure the actions generated flow through all the reducers in the app.

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

//this func takes the application state as an arguement.
//this func is the glue b/w react and redux.
function mapStateToProps(state) {
    //what ever gets returned will show up as props inside the container(BookList).
    return {
        books: state.books
    };
}

//Anything returned from this func are accessible as props in the BookList container.
function mapDispatchToProps(dispatch) {
    //first arguement takes all the actioncreators.
    //second arguement is the dispatch func which takes all these actions and passes it to the reducers.
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Whenever we make a container file we dont want to export the plain coomponent(classname).
//We want to export the container.
//we use the connect func to produce a container by creating the connection and make this a container by giving it access to the redux store.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

//whenever the application state changes, the container is also re-rendered with new props.