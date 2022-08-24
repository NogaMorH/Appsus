import { NoteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteSideNav } from "../cmps/note-side-nav.jsx"
import { NoteAdd } from '../cmps/note-add.jsx'



export class NoteIndex extends React.Component {

    state = {
        notes: null
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


    render() {
        const { notes } = this.state
        const { onRemoveNote, onAddNote } = this
        if (!notes) return <div>Loading...</div>
        return (
            <section className="flex notes-index">
                <NoteSideNav />
                <NoteList notes={notes} onRemoveNote={onRemoveNote} />
                <NoteAdd onAddNote={onAddNote} />
            </section>

        )
    }
}




