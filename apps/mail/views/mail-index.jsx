import { mailService } from '../services/mail.service.js'
import { MailList } from "../cmps/mail-list.jsx"
import { MailSideNav } from "../cmps/mail-side-nav.jsx"

export class MailIndex extends React.Component {

    state = {
        mails: null
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

    render() {
        const { mails } = this.state
        if (!mails) return <div></div>
        return <section className="flex mail-index">
            <MailSideNav />
            <MailList mails={mails} />
        </section>
    }
}
