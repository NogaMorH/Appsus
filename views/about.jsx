import { eventBusService } from "../services/event-bus.service.js"
import { AboutHero } from "../cmps/about-hero.jsx"
import { AboutUs } from "../cmps/about-us.jsx"

export class About extends React.Component {

    componentDidMount() {
        eventBusService.emit('open-page')
    }

    componentDidUpdate() {
        eventBusService.emit('open-page')
    }

    render() {
        return <section className="about">
            <AboutHero />
            <AboutUs />

        </section>
    }
}
