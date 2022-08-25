import { NoteService } from '../services/note.service.js'
export class NoteEdit extends React.Component {

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

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.match.params.noteId !== this.props.match.params.noteId) {
            this.loadNote()
        }
    }

    loadNote = () => {
        console.log('this.props:', this.props)
        if (!this.props.match) return
        const { noteId } = this.props.match.params
        NoteService.getNoteById(noteId)
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
        NoteService.save(this.state.note)
            .then(() => {
                this.props.history.push('/note')
            })
    }

    onGoBack = () => {
        this.props.history.push('/note')
    }


    render() {
        const { note } = this.state
        const { handleChange, onSaveNote } = this
        const { title, text } = note
        // console.log('note.info:', note.info)
        return <section className="display-note-container">
            <form onSubmit={onSaveNote} className="add-note-form">

                <input type="text"
                    name="title"
                    value={title}
                    placeholder="Title:"
                    onChange={handleChange} />

                <textarea
                    name="text"
                    id="text"
                    placeholder="Take a note..."
                    value={text}
                    cols="35"
                    rows="5"
                    onChange={handleChange}>
                </textarea>
                <button className="btn btn-save">Save</button>

            </form>
        </section >





    }
}