export class NoteButtons extends React.Component {
    state = {
        isPinned: false,
        colorPalleteOpen: false
    }


    onUpdateNoteBgColor = (color) => {
        console.log('ev:', ev)
        const newNote = {
            ...this.props.note,
            style: {
                backgroundColor,
            }

        }

        this.props.onUpdateNote(newNote)
        this.setState({ colorPalleteOpen: false })
    }

    toggleBgColorPallete = () => {
        this.setState({ colorPalleteOpen: !this.colorPalleteOpen })
    }



    render() {
        const { colorPalleteOpen } = this.state

        const { toggleBgColorPallete, onUpdateNoteBgColor } = this
        return <section className="note-buttons">
            <button className="btn">bg color</button>
            <button className="btn">Duplicate </button>
            <button className="btn">save </button>
            <button onClick={toggleBgColorPallete}>colors</button>
            <React.Fragment>
                {colorPalleteOpen && <div className="color-btns-container">
                    <button className="yellow" onClick={() => { onUpdateNoteBgColor('yollow') }}>red</button>
                </div>}
            </React.Fragment>
        </section>
    }
}

