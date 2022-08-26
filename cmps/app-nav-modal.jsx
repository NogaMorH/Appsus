const { Link } = ReactRouterDOM

export function AppNavModal() {
    return <nav className="app-nav-modal">
        <Link exact="true" to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/mail">Email</Link>
        <Link to="/note">Keep</Link>
        <Link to="/book">Books</Link>
    </nav>
}