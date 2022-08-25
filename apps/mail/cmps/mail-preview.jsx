export class MailPreview extends React.Component {

    state = {
        isSelected: false
    }

    setTimeForDisplay = () => {
        const { sentAt } = this.props.mail
        const date = new Date(sentAt)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return `${day}/${month}/${year}`
    }

    onToggleSelect = ({ target }) => {
        const { updateSelectedMails, mail } = this.props
        const isChecked = target.checked
        this.setState({ isSelected: isChecked },
            () => {
                updateSelectedMails(mail.id)
            })
    }

    render() {
        const { subject, from, body, id } = this.props.mail
        const { senderName } = from
        return <li className="mail-preview">
            <span><input type="checkbox" onClick={this.onToggleSelect} /></span>
            <span className="hide-long-text">{senderName}</span>
            <span className="hide-long-text">{subject} - {body}</span>
            <span className="hide-long-text">{this.setTimeForDisplay()}</span>

        </li>
    }
}

