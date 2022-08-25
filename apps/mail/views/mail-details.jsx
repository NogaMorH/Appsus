import { mailService } from "../services/mail.service.js"
import { MailSideNav } from "../cmps/mail-side-nav.jsx"

export class MailDetails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        console.log('did mount')
        this.loadMail()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.mailId !== this.props.match.params.mailId) this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        console.log('mailId:', mailId)
        mailService.getMailById(mailId)
            .then(mail => {
                if (!mail) {
                    this.onGoBack()
                    return
                }
                this.setState({ mail })
            })
    }

    onGoBack() {
        this.props.history.push('/mail')
    }

    render() {
        console.log('this.state.mail:', this.state.mail)
        if (!this.state.mail) return <div></div>
        const { subject, body } = this.state.mail
        return <section className="flex mail-details-page">
            <MailSideNav />
            <main className="mail-details">
                <h3>{subject}</h3>
                <p>{body}</p>
            </main>
        </section>
    }
}