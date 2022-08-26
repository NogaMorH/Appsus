import { mailService } from "../services/mail.service.js"
import { MailSideNav } from "../cmps/mail-side-nav.jsx"

export class MailDetails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        console.log('this:', this)
        this.loadMail()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.mailId !== this.props.match.params.mailId) this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getMailById(mailId)
            .then(mail => {
                if (!mail) {
                    this.onGoBack()
                    return
                }
                this.setState({ mail })
            })
    }

    onGoBack = () => {
        this.props.history.push('/mail')
    }

    render() {
        if (!this.state.mail) return <div></div>
        const { subject, body, from } = this.state.mail
        const { senderName, senderAddress } = from
        return <section className="flex mail-details-page">
            <MailSideNav />
            <main className="flex mail-details">
                <div className="mail-details-btns">
                    <button onClick={this.onGoBack} className="btn mail-control-btn">
                        <img src="../../../assets/img/arrow.png" alt="Go back" />
                    </button>
                </div>
                <div className="mail-content">
                    <h3 className="title">{subject}</h3>
                    <div className="sender">
                        <span className="sender-name">{senderName}</span>
                        <span className="sender-address">{senderAddress}</span>
                    </div>
                    <p>{body}</p>
                </div>
            </main>
        </section>
    }
}