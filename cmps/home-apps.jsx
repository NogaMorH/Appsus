const { Link } = ReactRouterDOM

export function HomeApps() {
    return <div className="flex home-apps">
        <article className="app">
            <div className="app-introduction">Keep your thoughts
                <br />
                and tasks Organized</div>
            <Link to="/note">
                <img src="../assets/img/note.png" />
            </Link>
            <div className="app-title">keep</div>
            <Link to="/note" className="btn get-started-btn keep">
                Get started
            </Link>
        </article>
        <article className="app">
            <div className="app-introduction">Manage your emails
                <br />
                in a simple platform
            </div>
            <Link to="/mail">
                <img src="../assets/img/mail.png" />
            </Link>
            <div className="app-title">Mail</div>
            <Link to="/mail" className="btn get-started-btn mail">
                Get started
            </Link>
        </article>
        <article className="app">
            <div className="app-introduction">Are you a book worm?
                <br />
                take a look at our book store
            </div>
            <Link to="/book">
                <img src="../assets/img/book.png" />
            </Link>
            <div className="app-title">Books</div>
            <Link to="/book" className="btn get-started-btn book">
                Get started
            </Link>
        </article>
    </div >
}



