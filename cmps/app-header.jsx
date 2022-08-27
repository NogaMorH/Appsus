import { AppNavModal } from "./app-nav-modal.jsx"
import { eventBusService } from "../services/event-bus.service.js"

const { Link, withRouter } = ReactRouterDOM
export class _AppHeader extends React.Component {

    state = {
        menuOpened: false
    }

    componentDidMount() {
        eventBusService.on('open-page', () => {
            // console.log('menu opened false')
            this.setState({ menuOpened: false })
        })
    }

    onToggleMenu = () => {
        this.setState(prevState => ({ menuOpened: !prevState.menuOpened }))
    }

    render() {
        return <header className="app-header-container">
            <div className="main-layout flex align-center app-header">
                <Link to="/" className="flex align-center logo">
                    <img src="../assets/img/logo.png" className="logo-img" alt="logo" />
                    <h3 className="logo-text">Appsus</h3>
                </Link>
                <img src="../assets/img/grid.png" alt="open menu" className="btn menu-btn"
                    onClick={this.onToggleMenu} />
                {(this.state.menuOpened) && <AppNavModal onToggleMenu={this.onToggleMenu} />}
            </div>
        </header >
    }
}

export const AppHeader = withRouter(_AppHeader)
