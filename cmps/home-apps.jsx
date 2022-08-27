const { Link } = ReactRouterDOM

export function HomeApps() {
    return <div className="flex home-layout home-apps">
        <article className="app">
            <div className="app-introduction">
                Keep your thoughts and tasks Organized
                {/* <br /> */}
            </div>
            <Link to="/note">
                <img src="./assets/img/note.png" />
            </Link>
            <div className="app-title">keep</div>
            <Link to="/note" className="btn get-started-btn keep">
                Get started
            </Link>
        </article>
        <article className="app">
            <div className="app-introduction">
                Manage your emails in a simple platform
                {/* <br /> */}
            </div>
            <Link to="/mail">
                <img src="./assets/img/mail.png" />
            </Link>
            <div className="app-title">Mail</div>
            <Link to="/mail" className="btn get-started-btn mail">
                Get started
            </Link>
        </article>
        <article className="app">
            <div className="app-introduction">
                Are you a book worm? take a look at our book store
                {/* <br /> */}

            </div>
            <Link to="/book">
                <img src="./assets/img/book.png" />
            </Link>
            <div className="app-title">Books</div>
            <Link to="/book" className="btn get-started-btn book">
                Get started
            </Link>
        </article>
    </div >
}



