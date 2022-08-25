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
        return <section className="mail-compose">
            <form onSubmit={this.onAddMail}>
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