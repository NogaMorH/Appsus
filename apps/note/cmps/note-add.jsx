export class NoteAdd extends React.Component {

    state = {
        note: {
            text: '',
            title: '',
            type: '',
            isPinned: false
        }
    }

    handleChange = ({target}) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            note:{
                ...prevState.note,
                [field]:value
            }
        }))
    }

    // onSubmit = (ev) => {
    //     ev.preventDefault()
    //         this.props.onAddNote(this.state.note)
        
    // }



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

                <button>Save</button>
            </form>
            <section className="btn-container">
                <button>Add img</button>
                <button>Add video</button>
                <button>bg color</button>
            </section>
            <div className="btn-pin">
                <button>pin</button>
            </div>
        </section>
    }
}