
export class VideoNote extends React.Component {
    render() {
        const { title, url } = this.props.note.info

        return <article className="flex note-video">
            <h3 contentEditable={true} suppressContentEditableWarning={true} className="note-title">{title}</h3>
            <iframe  height="210" src={url}></iframe>
        </article>

    }
}
