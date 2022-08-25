export class NoteFilter extends React.Component {

    state = {
        filterBy: {
            title: '',
            type: ''
        }
    }


    handleChange = ({target}) => {
        console.log('target:', target)
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }))
    }
    render() {
        const { title, type } = this.state.filterBy
        const {handleChange} = this
        return <section className="note-filter">

            <form >

                <label htmlFor="title"></label>
                <input type="text"
                    name="title"
                    value={title}
                    id="title"
                    placeholder="Search"
                    onChange={handleChange}/>

                    
            </form>
        </section>
    }
}