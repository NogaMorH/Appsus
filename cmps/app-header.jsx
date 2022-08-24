const { Link, NavLink, withRouter } = ReactRouterDOM
export function _AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h3>LOGO!</h3>
        </Link>
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Email</NavLink>
            <NavLink to="/keep">Keep</NavLink>
            <NavLink to="/book">Books</NavLink>
        </nav>
    </header>
}

export const AppHeader = withRouter(_AppHeader)
