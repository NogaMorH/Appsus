import { notesService } from '../services/note.service.js'

export class NoteIndex extends React.Component {

    state = {
        notes: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        notesService.query()
            .then(notes => this.setState({ notes }))
            console.log('notes:', notes)
    }


    render() {
        const { notes } = this.state
        if(!notes) return <div>Loading...</div>
        return (
            <section className="notes-index">
                <NoteList />
            </section>

        )
    }
}




