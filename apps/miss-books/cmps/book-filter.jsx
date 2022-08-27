export class BookFilter extends React.Component {

    state = {
        filterBy: {
            title: '',
            price: ''
        }
    }

    inputRef = React.createRef()

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
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

    goSearch = () => {
        this.inputRef.current.focus()
    }

    render() {
        const { title, price } = this.state.filterBy
        return <section className="book-filter flex main-layout">
            <form onSubmit={this.onFilter}>
                <label htmlFor="By-title">Title:
                <input type="text"
                    ref={this.inputRef}
                    placeholder="by title..."
                    id="by-title"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                />
                </label>

                <label htmlFor="by-price">Price: 
                    <input type="number"
                        placeholder="By price..."
                        id="by-price"
                        name="price"
                        value={price}
                        onChange={this.handleChange}
                    />
                     </label>
              

                <button className="book-btns">Filter</button>
            </form>

        <button className="btn-search book-btns"onClick={this.goSearch}>Go Search!</button>
        </section>

    }
}