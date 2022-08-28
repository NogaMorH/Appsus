import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { MailDetails } from "./apps/mail/views/mail-details.jsx"
import { BookIndex } from "./apps/miss-books/views/book-index.jsx"
import { BookDetails } from "./apps/miss-books/views/book-details.jsx"
import { BookEdit } from "./apps/miss-books/views/book-edit.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Switch>
                <Route path="/mail/:mailId" component={MailDetails} />
                <Route path="/mail" component={MailIndex} />
                <Route path="/note" component={NoteIndex} />
                <Route path="/book/edit" component={BookEdit} />ff
                <Route path="/book/:bookId" component={BookDetails} />
                <Route path="/book" component={BookIndex} />
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
            </Switch>
        </section>
    </Router>
}
