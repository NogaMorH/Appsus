const {NavLink, withRouter} = ReactRouterDOM

function _BookAppHeader(props){
    return <header className="full main-layout">
        <div className="app-header">
            <h3 onClick={() => {
                props.history.push("/")
            }}>Miss-Books</h3>

            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/book">Shop</NavLink>
                <NavLink exact to="/about">About</NavLink>

            </nav>
        </div>
         </header>
}


export const BookAppHeader = withRouter(_AppHeader)