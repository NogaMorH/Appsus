export class TextNote extends React.Component {

    onUpdateNewNote = (ev) => {
        const newNote = {
            ...this.props.note,
            info: {
                ...this.props.note.info,
                text: ev.target.innerText,
                // title: this.state.title
            }
        }

        this.props.onUpdateNote(newNote)
    }

    render() {
        const { text, title } = this.props.note.info
        const { onUpdateNewNote} = this

        return (<article className="flex note-text">
      
            <div className="note-text">
                <p contentEditable={true} suppressContentEditableWarning={true} 
                onBlur={onUpdateNewNote}>{text}</p>
            </div>
        </article>)
    }

}

