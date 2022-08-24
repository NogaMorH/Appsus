import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes }) {
    console.log('notes from note list:', notes)
    return <main className="flex note-list-container">
         {notes.map(note => <NotePreview note={note} key={note.id} /> )}
     
    </main>
}