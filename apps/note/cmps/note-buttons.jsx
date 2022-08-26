export class NoteButtons extends React.Component {
    state = {
        isPinned: false,
        colorPalleteOpen: false
    }


    toggleBgColorPallete = () => {
        this.setState({ colorPalleteOpen: !this.colorPalleteOpen })
    }



    render() {

        return <section className="note-buttons">
            <button className="btn" >Add img</button>
            <button className="btn">bg color</button>
            <button className="btn">delete </button>
            <button className="btn">Duplicate </button>
            <button className="btn">save </button>
        </section>
    }
}
