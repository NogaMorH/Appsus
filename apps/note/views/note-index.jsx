import { NoteService } from '../services/note.service.js'
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
        NoteService.query()
            .then(notes => this.setState({ notes }))
    }

    onRemoveNote = (noteId) => {
        console.log('noteId:', noteId)
        NoteService.remove(noteId)
            .then(() => {
                const notes = this.state.notes.filter(note => note.id !== noteId)
                this.setState({ notes }
                )
            })
    }

    onSelectedNote = (noteId) => {
        console.log('noteId:', noteId)
        NoteService.getNoteById(noteId)
            .then(note => this.setState({ selectedNote: note }))
    }


    saveNote = (newNote) => {

        NoteService.save(newNote)
            .then((note) => {
                // this.loadNotes()
                this.setState({notes:[note, ...this.state.notes]})
            })
        
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadNotes)
    }




    
    render() {
        const { notes, selectedNote } = this.state
        const { onRemoveNote, onSetFilter, onSelectedNote } = this
        if (!notes) return <div>Loading...</div>
        
        console.log('LENGTH:', this.state.notes.length);
        return (
            <section className="flex note-index">
                <NoteSideNav />
                <main className="flex main-content ">
                    <div className="input-container">

                        <NoteEdit saveNote={this.saveNote} />
                        <NoteFilter onSetFilter={onSetFilter} />
                    </div>
                    <NoteList notes={this.state.notes} onRemoveNote={onRemoveNote} onSelectedNote={onSelectedNote} />
                </main>
            </section>

        )
    }
}




