import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails }) {
    console.log('mails from mail list:', mails)
    return <main className="main-layout mail-list-container">
        <ul className="flex mail-list">
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
        </ul>
    </main>
}