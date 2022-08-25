import { MailPreview } from './mail-preview.jsx'

export class MailList extends React.Component {

    state = {
        selectedMails: []
    }

    updateSelectedMails() {
        console.log('update selected mails')
    }

    render() {
        const { mails } = this.props
        return <main className="main-layout mail-list-container">
            <ul className="flex mail-list">
                {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
            </ul>
        </main >
    }
}