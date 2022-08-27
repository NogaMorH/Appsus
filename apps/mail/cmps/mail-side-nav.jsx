const { NavLink } = ReactRouterDOM

export function MailSideNav({ composeMail }) {
    return <aside className="mail-side-nav">
        <button onClick={composeMail} className="btn main-layout compose-btn">Compose</button>
        <NavLink to="/mail" className="flex align-center inbox">
            <img src="../../assets/img/envelope.png" className="main-layout" />
            Inbox
        </NavLink>
    </aside>
}