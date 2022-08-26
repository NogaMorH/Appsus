export class MailFilter extends React.Component {
    state = {
        filterBy: {
            text: '',
        }
    }

    onHandleChange = ({ target }) => {

    }

    render() {
        return <input
            type="search"
            name="text"
            placeholder="search"
            onChange={this.onHandleChange} />
    }
}