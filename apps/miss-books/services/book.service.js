import { dataService } from './data.js'
import { googleBookService } from './google.book.service.js'
import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const bookService = {
    query,
    getBookById,
    saveReview,
    remove,
    removeReview,
    getBooksFromGoogle,
    save,
    getNextBookId,
    getPrevBookId,
    saveLastBookId,
    getLastBookId,
    _createBook
}

const STORAGE_KEY = 'booksDB'
const KEY = 'googleBooks'
let gGoogleBooksCache = storageService.loadFromStorage(KEY) || []

function query(filterBy) {
    let books = _loadFromStorage()
    if (!books) {
        books = _createBooks()
        _saveToStorage(books)
    }

    if (filterBy) {
        console.log('filterBy from service:', filterBy)
        let { title, price } = filterBy
        if (!price) price = Infinity
        if (!title) title = ''
        books = books.filter(book => (
            book.title.includes(title) &&
            book.listPrice.amount <= price
        ))
    }
    return Promise.resolve(books)
}



// getBooksFromGoogle('Harry Potter')
function getBooksFromGoogle(bookName) {
    if (!gGoogleBooksCache || gGoogleBooksCache.length === 0) {
        return axios.get(`https:www.googleapis.com/books/v1/volumes?printType=books&q=${bookName}`)
            .then((books) => books.data.items)
            // .then(_createBook)
    }
}

function _createBook(book) {

    return {
        id: book.id || makeId(),
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        authors: book.volumeInfo.authors,
        publisher: book.volumeInfo.publisher,
        publishDate: book.volumeInfo.publishDate,
        description: book.volumeInfo.description,
        pageCount: book.volumeInfo.pageCount,
        categories: book.volumeInfo.categories,
        thumbnail: book.volumeInfo.imageLinks,
        language: book.volumeInfo.language,
        reviews: [],
        listPrice: {
            amount: utilService.getRandomIntInclusive(20, 180),
            currencyCode: "EUR",
            isOnSale: true
        }

    }
}

function getBookById(bookId) {
    if (!bookId) return Promise.resolve(null)
    const books = _loadFromStorage()
    const book = books.find(book => bookId === book.id)
    return Promise.resolve(book)
}

function getNextBookId(bookId) {
    let books = _loadFromStorage()
    const bookIdx = books.findIndex(book => book.id === bookId)
    const nextBookIdx = bookIdx + 1 === books.length ? 0 : bookIdx + 1
    // console.log('nextBookIdx:', nextBookIdx)
    return books[nextBookIdx].id
}

function getPrevBookId(bookId) {
    let books = _loadFromStorage()
    const bookIdx = books.findIndex(book => book.id === bookId)
    const prevBookIdx = bookIdx - 1 < 0 ? books.length - 1 : bookIdx - 1
    console.log('prevBookIdx:', prevBookIdx)
    return books[prevBookIdx].id


}

function save(book) {
    if (book.id) return _update(book)
    else return _add(book)
}

function _add({ title, author, price }) {
    let books = _loadFromStorage()
    const book = googleBookService.createBook(title, author, price)
    books = [books, ...books]
    _saveToStorage(books)
    return Promise.resolve(book)
}

function remove(bookId) {
    let books = _loadFromStorage()
    books = books.filter(book => book.id !== bookId)
    _saveToStorage(books)
    return Promise.resolve()
}

function saveReview(bookId, review) {
    console.log('bookId:', bookId)
    console.log('review:', review)
    let books = _loadFromStorage()
    const bookIdx = books.findIndex(book => book.id === bookId)
    if (books[bookIdx].reviews) books[bookIdx].reviews.unshift(review)
    else {
        books[bookIdx].reviews = [review]
        // books[bookIdx].reviews.push(review)
    }
    _saveToStorage(books)
    return Promise.resolve()
}

function removeReview(fullName, bookId) {
    let books = _loadFromStorage()
    const bookIdx = books.findIndex(book => book.id === bookId)
    const reviews = books[bookIdx].reviews
    const reviewIdx = reviews.findIndex(review => review.fullName === fullName)
    reviews.splice(reviewIdx, 1)

    _saveToStorage(books)
    return Promise.resolve()

}

function getLastBookId() {
    const id = _loadFromStorage('lastBook')
}

function saveLastBookId(bookId) {
    _saveToStorage('lastBook', bookId)
}


function _createBooks() {
    return dataService.getBooks()
}

function _saveToStorage(books) {
    storageService.saveToStorage(STORAGE_KEY, books)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}