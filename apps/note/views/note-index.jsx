import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteSideNav } from "../cmps/note-side-nav.jsx"
import { AddNote } from '../cmps/add-note.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
import { eventBusService } from "../../../services/event-bus.service.js"
import { showErrorMsg, showSuccessMsg } from './../services/event-bus.service.js';

const { Link, Route } = ReactRouterDOM


export class NoteIndex extends React.Component {

    state = {
        notes: null,
        filterBy: null,
        selectedNote: null
    }

    componentDidMount() {
        this.loadNotes()
        eventBusService.emit('open-page')
    }

    componentDidUpdate() {
        eventBusService.emit('open-page')
    }

    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then(notes => this.setState({ notes }))
    }

    onRemoveNote = (noteId) => {
        noteService.remove(noteId)
            .then(() => {
                const notes = this.state.notes.filter(note => note.id !== noteId)
                this.setState({ notes })
            })
    }

    setSelectedNote = (noteId) => {
        noteService.getNoteById(noteId)
            .then(note => this.setState({ ...this.state, selectedNote: note }, () => {
                // console.log('noteId:', noteId)
            }))
    }

    onUpdateNote = (newNote) => {

        noteService.save(newNote)
            .then((note) => {
                this.setState({ notes: [note, ...this.state.notes] })
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadNotes()
        })

    }

    onSetNoteBgColor = (noteId, color) => {
        noteService.setNoteBgColor(noteId, color)
            this.loadNotes()
    }

    render() {
        const { notes } = this.state
        const { onRemoveNote, onSetFilter, setSelectedNote, onUpdateNote, onSetNoteBgColor } = this
        if (!notes) return <div>Loading...</div>

        return (
            <section className="flex note-index">
                <main className="flex main-content ">
                    <div className="input-container">
                        <AddNote saveNote={this.onUpdateNote} />
                        <NoteFilter onSetFilter={onSetFilter} />
                    </div>
                    <NoteList notes={this.state.notes} onRemoveNote={onRemoveNote} setSelectedNote={setSelectedNote} onUpdateNote={onUpdateNote}
                    onSetNoteBgColor={onSetNoteBgColor} />
                </main>
            </section>

        )
    }
}




