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

    // onOpenMail = () => {
    //     const { id } = this.props.mail
    //     if (this.state.isRead) return
    //     console.log('open mail')
    //     this.setState({ isRead: true }, () => {
    //         console.log('id from set state:', id)
    //         this.props.onMailRead(id)
    //     })
    // }

    render() {
        const { subject, from, body, id } = this.props.mail
        const { senderName } = from
        const readClass = this.getReadClass()
        return <li className={`mail-preview ${readClass}`}>
            <span><input type="checkbox" onClick={this.onToggleSelect} /></span>
            <Link to={"/mail/" + id} className="hide-long-text sender-name" onClick={this.onOpenMail}>
                {senderName}
            </Link>
            <Link to={"/mail/" + id} className="hide-long-text" onClick={this.onOpenMail}>
                <span className="subject">{subject}</span> - {body}
            </Link>
            <Link to={"/mail/" + id} className="hide-long-text" onClick={this.onOpenMail}>
                {this.setTimeForDisplay()}
            </Link>
        </li>
    }
}

