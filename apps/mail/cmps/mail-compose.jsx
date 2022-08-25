import { mailService } from '../services/mail.service.js'

export class MailCompose extends React.Component {

    state = {
        mail: {
            to: null,
            subject: null,
            body: null
        }
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    inputRef = React.createRef()

    onHandleChange = (ev) => {
        const { target } = ev
        const field = target.name
        const value = target.value
        this.setState(({ mail }) => ({
            mail: { ...mail, [field]: value }
        }))
    }

    onAddMail = (ev) => {
        ev.preventDefault()
        mailService.addMail(this.state.mail)
        this.props.closeCompose()
    }

    render() {
        const { closeCompose } = this.props
        return <section className="grid mail-compose">
            <header className="mail-compose-header">
                <button className="btn close-btn" onClick={closeCompose}>
                    x
                </button>
            </header>
            <form className="mail-compose-form" onSubmit={this.onAddMail}>
                <input onChange={this.onHandleChange}
                    type="text"
                    required
                    ref={this.inputRef}
                    name="to"
                    placeholder="To" />

                <input onChange={this.onHandleChange}
                    type="text"
                    name="subject"
                    placeholder="Subject" />

                <textarea onChange={this.handleChange} name="body"></textarea>
                <button>Send</button>
            </form>
        </section>
    }
}