const { Link } = ReactRouterDOM


export function NotePreview({ note }) {
    console.log('note:', note)
    const { text, url, title } = note.info
    return <article className="note-preview">
        <Link to={"/keep/" + note.id}>
            <p>{text}</p>
            <h3>{title}</h3>
            <img src={url} />
        </Link>
        <div>
            {/* buttons */}
        </div>

    </article>
}



