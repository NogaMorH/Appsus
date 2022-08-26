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
        console.log('this.props:', this.props)
        const { mails } = this.props
        return <main className="main-layout mail-list-container">
            <button onClick={() => this.props.onRemoveMail(this.state.selectedMails)}>Remove</button>
            <ul className="flex mail-list">
                {mails.map(mail => <MailPreview key={mail.id} mail={mail}
                    updateSelectedMails={this.updateSelectedMails} />)}
            </ul>
        </main >
    }
}