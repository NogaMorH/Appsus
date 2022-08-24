import { notesService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteSideNav } from "../cmps/note-side-nav.jsx"

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
    }


    render() {
        const { notes } = this.state
        if(!notes) return <div>Loading...</div>
        return (
            <section className="flex notes-index">
                <NoteSideNav />
                <NoteList notes={notes}/>
            </section>

        )
    }
}




