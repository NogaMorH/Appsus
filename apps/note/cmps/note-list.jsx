import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes }) {
    console.log('notes from note list:', notes)
    return <section className="flex note-list-container">
         {notes.map(note => <NotePreview note={note} key={note.id} /> )}
     
    </section>
}