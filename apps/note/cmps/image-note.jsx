export class ImageNote extends React.Component {
    
    onUpdateNewNote = (ev) => {
        const newNote = {
            ...this.props.note,
            info: {
                ...this.props.note.info,
                title: ev.target.innerText,
                // title: this.state.title
            }
        }

        this.props.onUpdateNote(newNote)
    }

    render() {
        const { onUpdateNewNote} = this
        const { title, url } = this.props.note.info

        return <article className="flex note-image">
            <h3 contentEditable={true} suppressContentEditableWarning={true}  onBlur={onUpdateNewNote} className="note-title">{title}</h3>
            <img className="note-image" src={url}/>
        </article>

    }

}