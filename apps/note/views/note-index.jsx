import { NoteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteSideNav } from "../cmps/note-side-nav.jsx"
import { NoteAdd } from '../cmps/note-add.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'



export class NoteIndex extends React.Component {

    state = {
        notes: null,
        filterBy: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        NoteService.query()
            .then(notes => this.setState({ notes }))
    }

    onRemoveNote = (noteId) => {
        console.log('noteId:', noteId)
        NoteService.remove(noteId)
            .then(() => {
                console.log('removed:')
                const notes = this.state.notes.filter(note => note.id !== noteId)
                this.setState({ notes }
                )
            })
    }

    onAddNote = (newNote) => {
        NoteService.addNote(newNote)
            .then(this.setState({notes: [newNote, ...this.state.notes]})
    )}

    onSetFilter = (filterBy) => {
        this.setState({filterBy},this.loadNotes)
    }


    render() {
        const { notes } = this.state
        const { onRemoveNote, onAddNote, onSetFilter } = this
        if (!notes) return <div>Loading...</div>
        return (
            <section className="flex notes-index">
                <NoteSideNav />
                <NoteList notes={notes} onRemoveNote={onRemoveNote} />
                <NoteFilter onSetFilter={onSetFilter} />
                <NoteAdd onAddNote={onAddNote} />
            </section>

        )
    }
}




