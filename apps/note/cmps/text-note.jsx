export class TextNote extends React.Component {
    render() {
        // console.log('props: from text note', this.props.note)
        const { title, text } = this.props.note.info
        // console.log('title, text:', title, text)
        return <article  className="flex note-preview">
            <div className="note-title">
            <h3 contentEditable={true} suppressContentEditableWarning={true} className="note-title">{title}</h3>
            </div>
            <div className="note-text">
            <p contentEditable={true} suppressContentEditableWarning={true} className="note-text">{text}</p>
            </div>
        </article>
    }

}

