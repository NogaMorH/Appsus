export function MailSideNav({ composeMail }) {
    return <aside className="main-layout mail-side-nav">
        <button onClick={composeMail}>Compose</button>
    </aside>
}