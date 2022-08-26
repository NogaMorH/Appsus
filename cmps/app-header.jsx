const { Link, NavLink, withRouter } = ReactRouterDOM
export function _AppHeader() {

    return <header className="app-header-container">
        <div className="main-layout flex align-center app-header">
            <Link to="/" className="flex align-center logo">
                <img src="../assets/img/logo.png" className="logo-img" alt="logo" />
                <h3 className="logo-text">Appsus</h3>
            </Link>
            <nav className="app-nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/mail">Email</NavLink>
                <NavLink to="/note">Keep</NavLink>
                <NavLink to="/book">Books</NavLink>
            </nav>
        </div>
    </header>
}

export const AppHeader = withRouter(_AppHeader)
