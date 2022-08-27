export class NoteFilter extends React.Component {

    state = {
        filterBy: {
            text: '',
            // type: ''
        }
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { text, type } = this.state.filterBy
        const { handleChange, onFilter } = this
        return <section className="note-filter">

            <form onSubmit={onFilter}>

                <label htmlFor="text"></label>
                <input type="search"
                    name="text"
                    value={text}
                    id="text"
                    placeholder="Search"
                    onChange={handleChange} />




            </form>
        </section>
    }
}