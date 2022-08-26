export class MailFilter extends React.Component {
    state = {
        filterBy: {
            text: '',
        }
    }

    onHandleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        console.log('field:', field)
        console.log('value:', value)
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => {
            const { filterBy } = this.state
            // console.log('filterBy from mail filter:', filterBy)
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
            onChange={this.onHandleChange} />
    }
}