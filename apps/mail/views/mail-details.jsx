import { mailService } from "../services/mail.service.js"

export class MailDetails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        this.loadMail()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.mailId !== this.props.match.params.mailId) this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getMailById(mailId)
            .then(mail => {
                if (!mail) {
                    this.onGoBack()
                    return
                }
                this.setState({ mail })
            })
    }

    onGoBack() {
        this.props.history.push('/mail')
    }

    render() {
        return
    }
}