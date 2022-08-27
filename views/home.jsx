import { HomeHero } from "../cmps/home-hero.jsx"
import { HomeApps } from "../cmps/home-apps.jsx"
import { eventBusService } from "../services/event-bus.service.js"

export class Home extends React.Component {

    componentDidMount() {
        eventBusService.emit('open-page')
    }

    componentDidUpdate() {
        eventBusService.emit('open-page')
    }

    render() {
        return <section className="home">
            <HomeHero />
            <HomeApps />
        </section>
    }
}