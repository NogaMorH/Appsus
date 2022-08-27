import { bookService } from "../services/book.service.js"
import { utilService } from "../../../services/util.service.js"

export class ReviewAdd extends React.Component {

    state = {
        review: {
            fullName: '',
            rate: 1,
            text: '',
            date: utilService.getCurrDate(),
        }
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    inputRef = React.createRef()


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'rate' ? +target.value : target.value
        this.setState((prevState) => ({
            review: {
                ...prevState.review,
                [field]: value
            }
        }))
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        const { bookId, loadBook } = this.props
        const { review } = this.state
        bookService.saveReview(bookId, review)
            .then(() => {
                this.setState({
                    review: {
                        fullName: '',
                        rate: 1,
                        text: '',
                        date: utilService.getCurrDate()
                    }
                }, loadBook())
            })
    }

    onRemoveReview(reviewName){
        const {bookId, loadBook} = this.props
        bookService.removeReview(reviewName, bookId)
            .then(() => loadBook())
    }



    render() {

        const { reviews } = this.props
        const { fullName, rate, text, date } = this.state
        return <section className="review-add">
            <h3>Write a Review!</h3>

            <form className="reviews" onSubmit={this.onSubmit} >

                <label htmlFor="name">Full Name:  </label>
                <input type="text"
                    ref={this.inputRef}
                    placeholder="Full name..."
                    id="name"
                    name="fullName"
                    value={fullName}
                    onChange={this.handleChange}
                />

                <label htmlFor="rate">Rate</label>
                <select name="rate"
                    id="rate"
                    value={rate}
                    onChange={this.handleChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <label htmlFor="date">Read at:</label>
                <input
                    type="date"
                    id="date"
                    value= {date}
                    name="date"
                    onChange={this.handleChange}
                />

                Add a writen review
                <textarea
                    name="text"
                    id="text"
                    cols="25" rows="5"
                    value={text}
                    placeholder="What did you like or dislike?"
                    onChange={this.handleChange}>
                </textarea>

                <button className="btn btn-review book-btns">Submit Review</button>
            </form>


        {reviews && <section className="reviews">
                <h2>Recent Reviews</h2>
                {reviews.map(review =>
                    <section key={review.fullName} className="review">
                        <h3>{review.fullName} / {review.rate}</h3>
                        <h3>Rate: {review.rate}</h3>
                        <p>"{review.text}"</p>
                        <button className="btn btn-close book-btns" onClick={() => this.onRemoveReview(review.fullName)}>X</button>
                    </section>
                )}
            </section>}
        </section >
    }
}

