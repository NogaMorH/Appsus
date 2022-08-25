export class TextNote extends React.Component {
    render() {
        // console.log('props: from text note', this.props.note)
        const { title, text } = this.props.note

        return <article  className="flex note-preview">
            <h3 contentEditable={true} suppressContentEditableWarning={true}>{title}</h3>
            <p contentEditable={true} suppressContentEditableWarning={true}>{text}</p>
        </article>
    }

}

