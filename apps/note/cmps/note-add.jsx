export class NoteAdd extends React.Component {

    state = {
        note: {
            text: '',
            title: '',
            type: 'text',
            isPinned: false
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            note: {
                ...prevState.note,
                [field]: value
            }
        }))
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        this.props.onAddNote(this.state.note)

    }



    render() {
        const { text, title, type, isPinned } = this.state.note
        const { handleChange, onSubmit } = this
        return <section className="add-note-container">
            <form onSubmit={onSubmit}>
                <input type="text"
                    name="title"
                    value={title}
                    placeholder="Title"
                    onChange={handleChange} />

                <input type="text"
                    name="text"
                    value={text}
                    placeholder="Take a note"
                    onChange={handleChange} />

                <button className="btn">Save</button>
            </form>
            <section className="btn-container">
                <button className="btn" >Add img</button>
                <button className="btn">Add video</button>
                <button className="btn">bg color</button>
            </section>
            <div className="btn btn-pin">
                <button>pin</button>
            </div>
        </section>
    }
}