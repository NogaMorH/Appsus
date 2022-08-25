import { NoteService } from '../services/note.service.js'
export class NoteDetails extends React.Component {

    state = {
        note: null
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
        const { noteId } = this.props.match.params
        NoteService.getNoteById(noteId)
        if (!note) return this.onGoBack()
            .then((note) => this.setState({ note }))
    }

    handleChange = ({target}) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => {
            
        })

    }

    onGoBack = () => {
        this.props.history.push('/note')
    }


    render() {
        const { note } = this.state
        if (!note) return
        const { handleChange, onSaveChanges } = this
        const { title, text } = note.info
        console.log('note.info:', note.info)
        return <section className="display-note-container">
            <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={onHandleChange}
            />
            <textarea></textarea>

            
        <button className="btn btn-save">Save</button>


        </section >





    }
}