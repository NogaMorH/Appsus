import { bookService } from "../services/book.service"

export class BookEdit extends React.Component {

    state = {
        book: {
            title: '',
            author: '',
            price: '',
        }
    }

    handleChange = ({ target }) => {
        const [field] = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({
            book: {
                ...prevState.book,
                [field]: value
            }
        }))

    }

    onSaveBook = (ev) => {
        ev.preventDefault()
        bookService.save(this.state.book)
        .then(() => {
            this.props.history.push('/book')
        })

    }


    render() {
        const { title, author, price } = this.state.book
        const {onSaveBook, handleChange} = this
        return <section className="book-edit">
            <form onSubmit={onSaveBook}>

                <label htmlFor="title">Title</label>
                <input type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={handleChange}
                />

                <label htmlFor="author">Author</label>
                <input type="text"
                    name="author"
                    id="author"
                    value={author}
                    onChange={handleChange}
                />

                <label htmlFor="price">Price</label>
                <input type="number"
                    name="price"
                    id="price"
                    value={price}
                    onChange={handleChange}
                />
                <button className="book-btns">Add book</button>

            </form>
        </section>
    }
}