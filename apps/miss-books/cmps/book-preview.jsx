import { utilService } from "../../../services/util.service.js"
const {Link} = ReactRouterDOM

export function BookPreview({ book }) {
    const {currencyCode, amount} = book.listPrice

    return<article className="book-preview" >
        <h3>Title: {book.title}</h3>
        <h3>Price: {amount} {utilService.setCurrency(currencyCode)}</h3>
        <Link to={"/book/" + book.id}> 
        <div className="img-container">
            <img src={book.thumbnail} />
        </div>
    </Link>
    </article>

}


