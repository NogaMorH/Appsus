import { TextNote } from "./text-note.jsx"
import { ImageNote } from "./image-note.jsx"
import { VideoNote } from "./video-note.jsx"
import { AddNote } from "./add-note.jsx"
import { NoteButtons } from "./note-buttons.jsx"

export class NotePreview extends React.Component {

    state = {
        noteType: null,
        isSelected: false,
    }


    componentDidMount() {
        this.setState({ noteType: this.props.note.type })
    }


    DynamicCmp = (props) => {
        // console.log('props: from dynamic', props)
        switch (this.state.noteType) {
            case 'text':
                return <TextNote {...props} />
            case 'image':
                return <ImageNote {...props} />
            case 'video':
                return <VideoNote {...props} />

        }
    }

    onSelectedNote = () => {
        const { id } = this.props.note
        this.setState({ isSelected: true }, () => this.props.setSelectedNote(id))
    }

    render() {
        const { note, onRemoveNote, onAddNote, setSelectedNote, onUpdateNote } = this.props
        const { DynamicCmp } = this

        return <article onClick={this.onSelectedNote} className="flex note-preview">
            <DynamicCmp note={note} onUpdateNote={onUpdateNote} />
            <div>
                <button className="btn control-btn-remove" onClick={() => onRemoveNote(note.id)}><img src="../../../assets/img/trash.png" alt="delete email" /></button>
            </div>

            <NoteButtons />
        </article>
    }
}



// export function NotePreview({ note, onRemoveNote }) {
//     // console.log('note:', note)
//     const { text, url, title } = note.info
//     return <article contentEditable={true} className="flex note-preview">
//         <Link to={"/note/" + note.id}>
//             <p>{text}</p>
//             <h3>{title}</h3>
//             <img src={url} />
//         </Link>
//         <div>
//             <button className="btn" onClick={() => onRemoveNote(note.id)}>X</button>
//         </div>

//     </article>

// onAddNote={onAddNote}


{/* <Link to={"/note/" + note.id}> */ }

{/* </Link>
            <Route path={"/note/:noteId"} component={NoteEdit} /> */}
{/* {this.state.isSelected ? <NoteEdit/> : <DynamicCmp note={note} /> } */ }

{/* {this.state.isSelected && <AddNote />}  */ }
