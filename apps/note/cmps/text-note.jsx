export class TextNote extends React.Component {

    // state = {
    //     text: this.props.note.info.text,
    //     title: this.props.note.info.title,
    // }


    onUpdateNewNote = (ev) => {
        // console.log('ev.target.innerText:', ev.target.innerText)
        const newNote = {
            ...this.props.note,
            info: {
                ...this.props.note.info,
                text: ev.target.innerText,
                // title: this.state.title
            }
        }

        this.props.onUpdateNote(newNote)
        // console.log("updateNode", newNote)
    }


    render() {
        const { text, title } = this.props.note.info
        const { onUpdateNewNote} = this

        return (<article className="flex note-text">
            {/* <div className="note-title">
                <h3 contentEditable={true} suppressContentEditableWarning={true} className="note-title">{title}</h3>
            </div> */}
            <div className="note-text">
                <p contentEditable={true} suppressContentEditableWarning={true} 
                onBlur={onUpdateNewNote}>{text}</p>
            </div>
        </article>)
    }

}

