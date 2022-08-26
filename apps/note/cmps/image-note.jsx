export class ImageNote extends React.Component {
    render() {
        // console.log('props: from image note', this.props)
        const { title, url } = this.props.note.info

        return <article className="flex note-image">
            <h3 contentEditable={true} suppressContentEditableWarning={true} className="note-title">{title}</h3>
            <img className="note-image" src={url}/>
        </article>

    }

}