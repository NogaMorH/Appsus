import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes }) {
    console.log('notes from note list:', notes)
    return <section className="note-list-container">
        {notes.map(note => <NotePreview /> )}
       
    </section>
}