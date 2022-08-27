import { mailService } from '../services/mail.service.js'
import { MailPreview } from './mail-preview.jsx'
import { eventBusService } from '../../../services/event-bus.service.js'

export class MailList extends React.Component {

    state = {
        selectedMails: []
    }

    updateSelectedMails = (mailId) => {
        this.setState(prevState => ({ selectedMails: [...prevState.selectedMails, mailId] }))
    }

    render() {
        const { mails } = this.props
        return <main className="main-layout mail-list-container">
            <button className="btn mail-control-btn" onClick={() => this.props.onRemoveMail(this.state.selectedMails)}>
                <img src="./../../assets/img/trash.png" alt="delete email" />
            </button>
            <ul className="flex mail-list">
                {mails.map(mail => <MailPreview key={mail.id} mail={mail}
                    updateSelectedMails={this.updateSelectedMails} />)}
            </ul>
        </main >
    }
}