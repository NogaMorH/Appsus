import { TextNote } from "./text-note.jsx"
import { ImageNote } from "./image-note.jsx"
import { VideoNote } from "./video-note.jsx"
import { NoteEdit } from "./edit-note.jsx"
import { eventBusService } from "../../../services/event-bus.service.js"
const { Link, Route } = ReactRouterDOM

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
        const { note, onRemoveNote, onAddNote, setSelectedNote } = this.props
        // console.log('note:from note preview', note)
        // console.log('this.props:', this.props)
        const { DynamicCmp } = this
        if(this.state.isSelected) return <NoteEdit />

        return <article onClick={this.onSelectedNote} className="flex note-preview">
            {/* <Link to={"/note/" + note.id}> */}
                <DynamicCmp note={note} />
            {/* </Link>
            <Route path={"/note/:noteId"} component={NoteEdit} /> */}
            {/* <NoteEdit /> */}


            <div>
                <button className="btn" onClick={() => onRemoveNote(note.id)}>X</button>
            </div>
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