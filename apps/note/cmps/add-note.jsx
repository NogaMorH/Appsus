import { noteService } from '../services/note.service.js'
export class AddNote extends React.Component {

    state = {
        note: {
            text: '',
            title: '',
            type: 'text',
            isPinned: false
        }
    }

    componentDidMount() {
        this.loadNote()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (!this.props.match) return
    //     if (!prevProps.match.params.noteId !== this.props.match.params.noteId) {
    //         this.loadNote()
    //     }
    // }

    loadNote = () => {
        if (!this.props.match) return
        const { noteId } = this.props.match.params
        noteService.getNoteById(noteId)
            .then((note) => {
                if (!note) return this.onGoBack()
                this.setState({ note })
            })
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

    onSaveNote = (ev) => {
        ev.preventDefault()
        this.props.saveNote(this.state.note)
        this.setState({note: {text: '', title:'', type:'text', isPinned: false}})

    }

    onGoBack = () => {
        this.props.history.push('/note')
    }

    render() {
        const { note } = this.state
        const { handleChange, onSaveNote } = this
        const { title, text } = note
        return <section className="display-note-container">
            <form onSubmit={onSaveNote} className="add-note-form">

                    <textarea
                        name="text"
                        id="text"
                        placeholder="Take a note..."
                        value={text}
                        cols="35"
                        rows="5"
                        onChange={handleChange}>
                    </textarea>
                    <div className="add-note-btns">
                        <button className="btn btn-save">Save</button>
                    </div>
             
            </form>
        </section >

    }
}