import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes, onRemoveNote, onAddNotes}) {
    // console.log('notes from note list:', notes)
    return <main className="main-layout note-list-container">
         {notes.map(note => {
            // console.log('noteeeeeee:', note) 
            return <NotePreview note={note} key={note.id} onRemoveNote={onRemoveNote} onAddNotes={onAddNotes} /> })}
     
    </main>
}
