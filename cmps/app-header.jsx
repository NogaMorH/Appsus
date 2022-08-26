import { AppNavModal } from "./app-nav-modal.jsx"

const { Link, withRouter } = ReactRouterDOM
export class _AppHeader extends React.Component {

    state = {
        menuOpened: false
    }

    onOpenMenu = () => {
        this.setState({ menuOpened: true })
    }

    render() {
        return <header className="app-header-container">
            <div className="main-layout flex align-center app-header">
                <Link to="/" className="flex align-center logo">
                    <img src="../assets/img/logo.png" className="logo-img" alt="logo" />
                    <h3 className="logo-text">Appsus</h3>
                </Link>
                <img src="../assets/img/grid.png" alt="open menu" className="btn menu-btn"
                    onClick={this.onOpenMenu} />
                {(this.state.menuOpened) && <AppNavModal />}
            </div>
        </header >
    }
}

export const AppHeader = withRouter(_AppHeader)
