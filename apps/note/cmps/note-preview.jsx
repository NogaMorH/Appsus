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
        const {backgroundColor} = this.props.note.style
        const { note, onRemoveNote, onUpdateNote, onSetNoteBgColor } = this.props

        const { DynamicCmp } = this

        return <article onClick={this.onSelectedNote} className={`flex note-preview ${backgroundColor}`}>
            <DynamicCmp note={note} onUpdateNote={onUpdateNote} onSetNoteBgColor={onSetNoteBgColor}  />
            <NoteButtons onRemoveNote={onRemoveNote} note={note} onSetNoteBgColor={onSetNoteBgColor}  />
        </article>
    }
}
