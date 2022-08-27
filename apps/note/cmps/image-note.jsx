export class ImageNote extends React.Component {
    render() {
        const { title, url } = this.props.note.info

        return <article className="flex note-image">
            <h3 contentEditable={true} suppressContentEditableWarning={true} className="note-title">{title}</h3>
            <img className="note-image" src={url}/>
        </article>

    }

}