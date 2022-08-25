export class ImageNote extends React.Component {
    render() {
        console.log('props: from image note', this.props)
        const { title, url } = this.props.note.info

        return <article contentEditable={true} className="flex note-preview">
            <h3>{title}</h3>
            <img src={url}/>
        </article>

    }

}