
export class VideoNote extends React.Component {

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

        return <article className="flex note-video">
            <h3 contentEditable={true} suppressContentEditableWarning={true} onBlur={onUpdateNewNote} className="note-title">{title}</h3>
            <iframe  height="210" src={url}></iframe>
        </article>

    }
}
