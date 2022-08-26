import { NotePreview } from './note-preview.jsx'

export class NoteList extends React.Component {


    render(){
        const {notes, onRemoveNote, onAddNotes, onSelectedNote} = this.props
        if(!notes) return <h3>Loading...</h3>
        return <main className="main-layout note-list-container">
        {notes.map(note => {
           return <NotePreview note={note} key={note.id} onRemoveNote={onRemoveNote} onAddNotes={onAddNotes} on /> })}
    
   </main>


    }


}

// export function NoteList({ notes, onRemoveNote, onAddNotes}) {
//     // console.log('notes from note list:', notes)
//     return <main className="main-layout note-list-container">
//          {notes.map(note => {
//             // console.log('noteeeeeee:', note) 
//             return <NotePreview note={note} key={note.id} onRemoveNote={onRemoveNote} onAddNotes={onAddNotes} /> })}
     
//     </main>
// }
