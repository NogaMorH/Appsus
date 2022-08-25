export class ImageNote extends React.Component {
    render() {
        console.log('props: from image note', this.props)
        const { title, url } = this.props.note.info

        return <article className="flex note-preview">
            <h3 contentEditable={true} suppressContentEditableWarning={true}>{title}</h3>
            <img src={url}/>
        </article>

    }

}