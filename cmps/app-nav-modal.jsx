const { Link } = ReactRouterDOM

export function AppNavModal() {
    return <nav className="flex space-between app-nav-modal">
        <Link exact="true" to="/" className="app-nav-link">
            <img src="../assets/img/home.png" className="app-nav-icon" />
            Home</Link>
        <Link to="/mail" className="app-nav-link">
            <img src="../assets/img/mail.png" className="app-nav-icon" />
            Email</Link>
        <Link to="/note" className="app-nav-link">
            <img src="../assets/img/note.png" className="app-nav-icon" />
            Keep</Link>
        <Link to="/book" className="app-nav-link">
            <img src="../assets/img/book.png" className="app-nav-icon" />
            Books</Link>
        <Link to="/about" className="app-nav-link">
            <img src="../assets/img/about.png" className="app-nav-icon" />
            About</Link>
    </nav>
}