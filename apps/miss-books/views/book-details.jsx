import { bookService } from "../services/book.service.js";
// import { BookIndex } from "../views/book-index.jsx";
import { utilService } from "../../../services/util.service.js"
import { ReviewAdd } from "../cmps/review-add.jsx";
const { Link } = ReactRouterDOM


export class BookDetails extends React.Component {

    state = {
        book: null,
        isReviewAdd: false
    }

    componentDidMount() {
        this.loadBook()
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.match.params.bookId !== this.props.match.params.bookId){
            this.loadBook()
        }
    }

    loadBook = () => {
        console.log('this.props:', this.props)
        const { bookId } = this.props.match.params
        bookService.getBookById(bookId)
            .then((book) => {
                if (!book) return this.onGoBack()
                this.setState({ book })

            })
    }

    setPriceClass = () => {
        const price = this.state.book.listPrice.amount
        if (price > 150) return 'red'
        else if (price < 20) return 'green'
        else return ''
    }

    setLengthLabel = () => {
        const { pageCount } = this.state.book
        if (pageCount > 500) return 'Long reading'
        else if (pageCount > 200) return 'Decent reading'
        else if (pageCount < 100) return 'Light reading'
    }

    setPublishClass = () => {
        const currYear = new Date().getFullYear()
        // console.log('date:', currYear)
        // console.log('book.publishedDate:', this.state.book.publishedDate)
        if ((currYear - this.state.book.publishedDate) >= 10) return 'Veteran book'
        else if (currYear - this.state.book.publishedDate <= 1) return 'New book'
    }

    onGoBack = () => {
        this.props.history.push('/book')
    }


    addReview = () => {
        this.setState(({ isReviewAdd: true }))
    }




    render() {
        const { book, isReviewAdd } = this.state
        if (!book) return <div>loading...</div>
        const currencyCode = utilService.setCurrency(book.listPrice.currencyCode)
        const price = this.state.book.listPrice.amount
        const nextBookId = bookService.getNextBookId(book.id)
        const prevBookId = bookService.getPrevBookId(book.id)

        return <section className="book-details flex space-between main-layout">
            {!isReviewAdd && <React.Fragment> <div className="img-container ">
                <img src={book.thumbnail} />
            </div>
                <div className="book-details-text">
                    <ul className="book-details-list clean">
                        <li>Title: {book.title} </li>
                        <li>Subtitle: {book.subtitle}</li>
                        <li>Authors: {book.authors}</li>
                        <li className={this.setPriceClass()}>Price: {price}{currencyCode}</li>
                        <li>Description:</li>
                        <li>{book.description}</li>
                        <li>Published At: {book.publishedDate} -
                            <span className="publish-class"> {this.setPublishClass()}</span>
                        </li>
                        <li>Page Count: {book.pageCount} -
                            <span className="page-length-label"> {this.setLengthLabel()}</span>
                        </li>
                        <li>Categories: {book.categories.join(', ')}</li>
                        <li>Language: {book.language}</li>
                    </ul>
                    <div className="btn-container">
                        <Link to={`/book/${prevBookId}`} className="btn book-btns"> <button>Prev book</button></Link>
                        <Link to={`/book/${nextBookId}`} className="btn book-btns"> <button>Next book</button></Link>
                        <button className="btn book-btns" onClick={this.addReview}>Add Review</button>
                        <button className="btn book-btns" onClick={this.onGoBack}>Go Back!</button>
                    </div>
                </div>
            </React.Fragment>}
            <div className="review-container">
                {isReviewAdd && <ReviewAdd bookId={book.id} loadBook={this.loadBook} reviews={book.reviews} />}
            </div>
        </section>
    }
}