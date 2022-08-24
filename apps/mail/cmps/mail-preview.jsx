export function MailPreview({ mail }) {
    const { subject, from, body } = mail
    const { senderName } = from
    return <li className="mail-preview">
        <span>icons</span>
        <span>{senderName}</span>
        <span>{subject} - {body}</span>
        <span>time</span>
    </li>
}