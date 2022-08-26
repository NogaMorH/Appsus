import { mailService } from '../services/mail.service.js'
import { MailPreview } from './mail-preview.jsx'

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
            <button className="btn" onClick={() => this.props.onRemoveMail(this.state.selectedMails)}>Remove</button>
            <ul className="flex mail-list">
                {mails.map(mail => <MailPreview key={mail.id} mail={mail}
                    updateSelectedMails={this.updateSelectedMails} />)}
            </ul>
        </main >
    }
}