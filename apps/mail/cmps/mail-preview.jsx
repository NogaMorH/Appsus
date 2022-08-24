export function MailPreview({ mail }) {
    const { subject, from, body, sentAt } = mail
    const { senderName } = from

    setTimeForDisplay()

    function setTimeForDisplay() {
        const date = new Date(sentAt)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return `${day}/${month}/${year}`
    }

    return <li className="mail-preview">
        <span>icons</span>
        <span className="hide-long-text">{senderName}</span>
        <span className="hide-long-text">{subject} - {body}</span>
        <span className="hide-long-text">{setTimeForDisplay()}</span>
    </li>
}

