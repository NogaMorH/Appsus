import { googleBookService } from "../services/google.book.service.js";

export class AddBook extends React.Component {

    state = {
        book: '',
        searchedBooks: []
    }

    onGetBooks = (ev) => {
        ev.preventDefault()
        googleBookService.getBooksFromGoogle()
            .then((res) => res)
    }

    handleChange = (ev) => {
        const {value} = ev.target
        this.setState({book: value})
    }

    render(){
        return <section className="book-add">
            <form onSubmit={this.onGetBooks}>
                <label htmlFor="search-book"></label>
                <input type="search"
                id="search-book"
                name="search-book"
                placeholder="Search book"
                // value={book}
                onChange={this.handleChange}
                 />
            </form>
        </section>
    }


}