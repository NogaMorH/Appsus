export class TextNote extends React.Component {

    state = {
        text: this.props.note.info.text,
        title: this.props.note.info.title,
        editMode: false
    }


    onUpdateNewNote = (ev) => {
        console.log('ev.target.innerText:', ev.target.innerText)
        const newNote = {
            ...this.props.note,
            info: {
                ...this.props.note.info,
                text: ev.target.innerText,
                // title: this.state.title
            }
        }

        console.log("updateNode", newNote)
        this.props.onUpdateNote(newNote)
        this.onToggleEditMode()
    }


    render() {
        const { text, title } = this.state
        const { onUpdateNewNote} = this

        return (<article className="flex note-text">
            <div className="note-title">
                <h3 contentEditable={true} onClick={this.onToggleEditMode} suppressContentEditableWarning={true} className="note-title">{title}</h3>
            </div>
            <div className="note-text">
                <p contentEditable={true} suppressContentEditableWarning={true} onClick={this.onToggleEditMode} onBlur={onUpdateNewNote}
                 className="note-text">{text}</p>
            </div>
        </article>)
    }

}

