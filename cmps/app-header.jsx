const { Link, NavLink, withRouter } = ReactRouterDOM
export function _AppHeader() {

    return <header className="app-header-container">
        <div className="main-layout app-header">
            <Link to="/">
                <h3>LOGO!</h3>
            </Link>
            <nav className="app-nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/mail">Email</NavLink>
                <NavLink to="/keep">Keep</NavLink>
                <NavLink to="/book">Books</NavLink>
            </nav>
        </div>
    </header>
}

export const AppHeader = withRouter(_AppHeader)
