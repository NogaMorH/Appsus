export class MailFilter extends React.Component {
    state = {
        filterBy: {
            text: '',
        }
    }

    onHandleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => {
            const { filterBy } = this.state
            this.props.onSetFilter(filterBy)
        })
    }

    render() {
        const { text } = this.state.filterBy
        return <input
            type="search"
            name="text"
            value={text}
            placeholder="search"
            className="mail-filter"
            onChange={this.onHandleChange} />
    }
}