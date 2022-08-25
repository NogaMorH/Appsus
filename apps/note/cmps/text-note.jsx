export class TextNote extends React.Component {
    render() {
        console.log('props:', this.props)
        const { title, text } = this.props.note.info

        return <article contentEditable={true} className="flex note-preview">
            <h3>{title}</h3>
            <p>{text}</p>
        </article>

    }

}