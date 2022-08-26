import { NotePreview } from './note-preview.jsx'

const { Link, Route } = ReactRouterDOM
export class NoteList extends React.Component {



    render(){
        const {notes, onRemoveNote, onAddNotes, setSelectedNote} = this.props
        if(!notes) return <h3>Loading...</h3>
        return <main className="main-layout note-list-container">
        {notes.map(note => {
           return <NotePreview note={note} key={note.id} onRemoveNote={onRemoveNote} onAddNotes={onAddNotes} setSelectedNote={setSelectedNote} /> })}
           
   </main>

    }
}

