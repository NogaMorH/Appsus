export class MailFilter extends React.Component {
    state = {
        filterBy: {
            text: '',
        }
    }

    render() {
        return <input
            type="search"
            name="text"
            placeholder="search" />
    }
}