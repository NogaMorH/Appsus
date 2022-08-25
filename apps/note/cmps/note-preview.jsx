const { Link } = ReactRouterDOM


export function NotePreview({ note, onRemoveNote }) {
    // console.log('note:', note)
    const { text, url, title } = note.info
    return <article contentEditable={true} className="flex note-preview">
        <Link to={"/note/" + note.id}>
            <p>{text}</p>
            <h3>{title}</h3>
            <img src={url} />
        </Link>
        <div>
            <button className="btn" onClick={() => onRemoveNote(note.id)}>X</button>
        </div>

    </article>
}



