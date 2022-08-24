import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails }) {
    console.log('mails from mail list:', mails)
    return <section className="mail-list-container">
        <ul className="mail-list">
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
        </ul>
    </section>
}