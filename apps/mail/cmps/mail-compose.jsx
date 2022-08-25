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

    handleChange = (ev) => {
        const { target } = ev
        const field = target.name
        const value = target.value
        this.setState(({ mail }) => ({
            mail: { ...mail, [field]: value }
        }))
    }

    addMail(ev) {
        ev.preventDefault()
        console.log('add mail')
    }

    render() {
        return <section className="mail-compose">
            <form onSubmit={this.addMail}>
                <input onChange={this.handleChange}
                    type="text"
                    required
                    ref={this.inputRef}
                    name="to"
                    placeholder="To" />

                <input onChange={this.handleChange}
                    type="text"
                    name="subject"
                    placeholder="Subject" />

                <textarea onChange={this.handleChange} name="body"></textarea>
                <button>Send</button>
            </form>
        </section>
    }
}