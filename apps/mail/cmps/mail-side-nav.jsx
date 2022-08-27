const { NavLink } = ReactRouterDOM

export function MailSideNav({ composeMail, onToggleMenu }) {

    function onCompose() {
        composeMail()
        onToggleMenu()
    }

    return <aside className="mail-side-nav">
        <button onClick={onCompose} className="btn main-layout compose-btn">Compose</button>
        <NavLink to="/mail" className="flex align-center inbox">
            <img src="./../assets/img/envelope.png" className="main-layout" />
            Inbox
        </NavLink>
    </aside>
}