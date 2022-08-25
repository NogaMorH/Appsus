export class TextNote extends React.Component {
    render() {
        console.log('props: from text note', this.props.note)
        const { title, text } = this.props.note

        return <article contentEditable={true} className="flex note-preview">
            <h3>{title}</h3>
            <p>{text}</p>
        </article>

    }

}