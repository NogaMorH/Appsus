export function MailSideNav({ composeMail }) {
    return <aside className="main-layout mail-side-nav">
        <button onClick={composeMail} className="btn compose-btn">Compose</button>
    </aside>
}