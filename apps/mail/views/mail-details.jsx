import { mailService } from "../services/mail.service.js"
import { MailSideNav } from "../cmps/mail-side-nav.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"
import { eventBusService } from "../../../services/event-bus.service.js"

export class MailDetails extends React.Component {

    state = {
        mail: null,
        composeOpened: false
    }

    componentDidMount() {
        this.onCloseMenu()
        console.log('this:', this)
        this.loadMail()
        eventBusService.emit('open-page')
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.mailId !== this.props.match.params.mailId) this.loadMail()
        eventBusService.emit('open-page')
        this.onCloseMenu()
    }

    composeMail = () => {
        this.setState({ composeOpened: true })
    }

    closeCompose = () => {
        this.setState({ composeOpened: false })
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

    onCloseMenu = () => {
        document.body.classList.remove('menu-opened')
    }

    setTimeForDisplay = () => {
        const { sentAt } = this.state.mail
        const date = new Date(sentAt)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return `${day}/${month}/${year}`
    }

    onRemoveMail = () => {
        console.log('remove mail details')
        eventBusService.emit('remove-mail', this.state.mail.id)
        this.onGoBack()
    }


    render() {
        if (!this.state.mail) return <div></div>
        const { composeOpened } = this.state
        const { subject, body, from, sentAt } = this.state.mail
        const { senderName, senderAddress } = from
        return <section className="flex mail-details-page">
            <MailSideNav composeMail={this.composeMail} />
            <main className="flex mail-details">
                <div className="mail-details-btns">
                    <button onClick={this.onGoBack} className="btn mail-control-btn">
                        <img src="../../../assets/img/arrow.png" alt="Go back" />
                    </button>
                    <button onClick={this.onRemoveMail} className="btn mail-control-btn">
                        <img src="../../../assets/img/trash.png" />
                    </button>
                </div>
                <div className="mail-content">
                    <h3 className="title">{subject}</h3>
                    <div className="sender">
                        <span className="sender-name">{senderName}</span>
                        <span className="sender-address">{senderAddress}</span>
                    </div>
                    <div className="time">{this.setTimeForDisplay()}</div>
                    <p>{body}</p>
                </div>
            </main>
            {composeOpened && <MailCompose closeCompose={this.closeCompose} />}
        </section>
    }
}