import { mailService } from '../services/mail.service.js'
import { MailList } from "../cmps/mail-list.jsx"
import { MailSideNav } from "../cmps/mail-side-nav.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"

export class MailIndex extends React.Component {

    state = {
        mails: null,
        composeOpened: false
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails() {
        mailService.query()
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
        selectedMails.forEach(id => mailService.removeMail(id))
        this.loadMails()
    }

    render() {
        const { mails, composeOpened } = this.state
        if (!mails) return <div></div>
        return <section className="flex mail-index">
            <MailSideNav composeMail={this.composeMail} />
            <MailList mails={mails} onRemoveMail={this.onRemoveMail} />
            {composeOpened && <MailCompose closeCompose={this.closeCompose} />}
        </section>
    }
}
