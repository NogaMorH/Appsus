
export class VideoNote extends React.Component {
    render() {
        // console.log('props: from video note', this.props)
        const { title, url } = this.props.note.info

        return <article className="flex note-preview">
            <h3 contentEditable={true} suppressContentEditableWarning={true} className="note-title">{title}</h3>
            <iframe width="210" height="200" src={url}></iframe>
        </article>

    }
}
