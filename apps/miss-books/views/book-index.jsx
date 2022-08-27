import { BookFilter } from '../cmps/book-filter.jsx'
import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/book-list.jsx'
import { googleBookService } from '../services/google.book.service.js'
import { BookDetails } from './book-details.jsx'
import { AddBook } from '../cmps/book-add.jsx'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
const {Link} = ReactRouterDOM


export class BookIndex extends React.Component {

    state = {
        books: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then(books => this.setState({ books: books }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => { this.loadBooks() }
        )
    }

    onAddBook = () => {

    }

    render() {
        const { books } = this.state
        const { onAddBook, onSetFilter } = this
        return (
            <section className="book-app">
                <Link to="/book/edit"><button className=".book-btns">Add book</button></Link>
                <AddBook onAddBook={onAddBook} />
                <BookFilter onSetFilter={onSetFilter} />
                <BookList books={books} />
            </section>
        )
    }
}

