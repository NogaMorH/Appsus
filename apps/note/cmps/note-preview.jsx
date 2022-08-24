export function NotePreview({ note }) {
    console.log('note:', note)
        const{ text } = note.info
    return <article className="note-preview">
        {text}
    </article>
}

// {
    // {
    //     id: utilService.makeId(),
    //         type: 'note-text',
    //             isPinned: true,
    //                 info: {
    //         text: 'Fullstack Me Baby!'
    //     }
    // },