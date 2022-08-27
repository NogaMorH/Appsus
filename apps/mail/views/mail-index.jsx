import { mailService } from '../services/mail.service.js'
import { MailList } from "../cmps/mail-list.jsx"
import { MailSideNav } from "../cmps/mail-side-nav.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { eventBusService } from "../../../services/event-bus.service.js"

export class MailIndex extends React.Component {

    state = {
        mails: null,
        composeOpened: false,
        filterBy: null
    }

    componentDidMount() {
        this.loadMails()
        eventBusService.emit('open-page')
    }

    componentDidUpdate() {
        eventBusService.emit('open-page')
    }

    loadMails() {
        mailService.query(this.state.filterBy)
            .then(mails => {
                this.setState({ mails })
            })
    }

    composeMail = () => {
        this.setState({ composeOpened: true })
    }

    closeCompose = () => {
        this.setState({ composeOpened: false }, () => {
            this.loadMails()
        })
    }

    onRemoveMail = (selectedMails) => {
        if (!selectedMails || !selectedMails.length) return
        selectedMails.forEach(id => mailService.removeMail(id))
        this.loadMails()
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails)
    }


    render() {
        const { mails, composeOpened } = this.state
        const { onSetFilter } = this
        if (!mails) return <div></div>
        return <section className="flex mail-index">
            <MailSideNav composeMail={this.composeMail} />
            <main>
                <MailFilter onSetFilter={onSetFilter} />
                <MailList mails={mails} onRemoveMail={this.onRemoveMail} />
            </main>
            {composeOpened && <MailCompose closeCompose={this.closeCompose} />}
        </section>
    }
}
