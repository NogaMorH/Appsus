import { BookPreview } from './book-preview.jsx'

export function BookList({ books }) {
    if (!books) return <h1>loading...</h1>
    return <section className="book-list main-layout">
        {books.map(book => <BookPreview
            key={book.id}
            book={book}
        />)}
    </section>
}