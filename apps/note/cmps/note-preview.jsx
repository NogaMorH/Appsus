import { TextNote } from "./text-note.jsx"
import { ImageNote } from "./image-note.jsx"
const { Link } = ReactRouterDOM


export class NotePreview extends React.Component {

    state = {
        noteType: null
    }

    componentDidMount(){
        this.setState({noteType: this.props.note.type})
    }

    DynamicCmp = (props) => {

        switch (this.state.noteType) {
            case 'text':
                return <TextNote {...props} />
            case 'image':
                return <ImageNote {...props} />
            // case 'video':
            //     return <VideoNote {...props} />
        }
    }

    render() {
        const { DynamicCmp } = this
        const {note, onRemoveNote} = this.props
    

        return <article className="flex note-preview">
            
            <Link to={"/note/" + note.id}>
            <DynamicCmp note={note}/>
            </Link>
            
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