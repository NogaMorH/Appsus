import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteSideNav } from "../cmps/note-side-nav.jsx"
import { NoteEdit } from '../cmps/edit-note.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
import { eventBusService } from "../../../services/event-bus.service.js"
const { Link, Route } = ReactRouterDOM


export class NoteIndex extends React.Component {

    state = {
        notes: null,
        filterBy: null,
        selectedNote: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then(notes => this.setState({ notes }))
    }

    onRemoveNote = (noteId) => {
        console.log('noteId:', noteId)
        noteService.remove(noteId)
            .then(() => {
                const notes = this.state.notes.filter(note => note.id !== noteId)
                this.setState({ notes }
                )
            })
    }

    setSelectedNote = (noteId) => {
        noteService.getNoteById(noteId)
            .then(note => this.setState({ ...this.state, selectedNote: note }, () => {
            console.log('noteId:', noteId)
            }))
    }


    saveNote = (newNote) => {

        noteService.save(newNote)
            .then((note) => {
                // this.loadNotes()
                this.setState({ notes: [note, ...this.state.notes] })
            })

    }

    onSetFilter = (filterBy) => {
        // console.log('filterBy:', filterBy)
        this.setState({ filterBy }, () => {
            this.loadNotes()
        })

    }

    onSetNoteBgColor = (noteId,color) => {
        noteService.setNoteBgColor(noteId,color)
            .then
    }   
    

    render() {
        const { notes } = this.state
        const { onRemoveNote, onSetFilter, setSelectedNote } = this
        if (!notes) return <div>Loading...</div>

        // console.log('LENGTH:', this.state.notes.length);
        return (
            <section className="flex note-index">
                <NoteSideNav />
                <main className="flex main-content ">
                    <div className="input-container">

                        <NoteEdit saveNote={this.saveNote} />
                        <NoteFilter onSetFilter={onSetFilter} />
                    </div>
                    <NoteList notes={this.state.notes} onRemoveNote={onRemoveNote} setSelectedNote={setSelectedNote} />
                </main>
            </section>

        )
    }
}




