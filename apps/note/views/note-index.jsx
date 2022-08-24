import { notesService } from "../services/note.service.js"

export class NoteIndex extends React.Component {

    state = {
        notes: null
    }

    componentDidMount() {
        this.loadNoted()
    }

    loadNotes = () => {
        notesService.query()
            .then(notes => this.setState({ notes }))
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



