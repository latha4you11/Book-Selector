import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer, //books here is the key of the BooksReducer in the global application state.
  activeBook: ActiveBook
});

export default rootReducer;
