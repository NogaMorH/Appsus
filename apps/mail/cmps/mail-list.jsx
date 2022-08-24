import { MailPreview } from './mail-preview.jsx'

export function MailList(mails) {
    return <section className="mail-list-container">
        <ul className="mail-list">
            {mails.map(mail => <MailPreview mail={mail} />)}
        </ul>
    </section>
}