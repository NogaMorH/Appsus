export function MailPreview({ mail }) {
    const { subject, body } = mail
    return <li>
        <div>{subject}</div>
        {/* <div>{body}</div> */}
        {/* <div></div> */}
    </li>
}