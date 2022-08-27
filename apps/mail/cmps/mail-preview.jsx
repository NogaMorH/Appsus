const { Link } = ReactRouterDOM

export class MailPreview extends React.Component {

    state = {
        isSelected: false,
        isRead: false
    }

    componentDidMount() {
        const { isRead } = this.props.mail
        this.setState({ isRead })
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

    getReadClass = () => {
        return (this.state.isRead) ? 'read' : 'unread'
    }

    getSelectedClass = () => {
        return (this.state.isSelected) ? 'selected' : ''
    }

    render() {
        const { subject, from, body, id } = this.props.mail
        const { senderName } = from
        const readClass = this.getReadClass()
        const selectedClass = this.getSelectedClass()
        return <li className={`mail-preview ${readClass} ${selectedClass}`}>
            <span><input type="checkbox" onClick={this.onToggleSelect} className="mail-checkbox" /></span>
            <Link to={"/mail/" + id} className="hide-long-text sender-name">
                {senderName}
            </Link>
            <Link to={"/mail/" + id} className="hide-long-text">
                <span className="subject">{subject}</span> - {body}
            </Link>
            <Link to={"/mail/" + id} className="hide-long-text time">
                {this.setTimeForDisplay()}
            </Link>
        </li>
    }
}

