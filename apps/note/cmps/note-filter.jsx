export class NoteFilter extends React.Component {

    state = {
        filterBy: {
            title: '',
            type: ''
        }
    }


    handleChange = ({target}) => {
        // console.log('target:', target)
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }))
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { title, type } = this.state.filterBy
        const {handleChange, onFilter} = this
        return <section className="note-filter">

            <form onSubmit={onFilter}>

                <label htmlFor="title"></label>
                <input type="search"
                    name="title"
                    value={title}
                    id="title"
                    placeholder="Search"
                    onChange={handleChange}/>




            </form>
        </section>
    }
}