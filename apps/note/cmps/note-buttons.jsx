export class NoteButtons extends React.Component {
    state = {
        isPinned: false,
        colorPalleteOpen: false,
    }


    setNoteBgColor = (color) => {
        const { id } = this.props.note
        this.props.onSetNoteBgColor(id, color)

    }

    toggleBgColorPallete = () => {
        this.setState({ colorPalleteOpen: !this.colorPalleteOpen })
    }



    render() {
        const { colorPalleteOpen } = this.state
        const { onRemoveNote, note } = this.props
        const {backgroundColor} = this.props.note.style
        const { toggleBgColorPallete, onUpdateNoteBgColor } = this
        return <section className="note-buttons">
            <button onClick={toggleBgColorPallete} className="btn note-btn"><img src="../../../assets/img/color-pallete.png" alt="color-pallete-button" /></button>
            <button className="btn note-btn"><img src="../../../assets/img/duplicate.png" alt="color-duplicate-button" /></button>
            <button className="btn note-btn" onClick={() => onRemoveNote(note.id)}><img src="../../../assets/img/trash.png" alt="delete note-button" /></button>
            <button className="btn note-btn save">Save </button>
            <React.Fragment>
                {colorPalleteOpen && <div className="color-btns-container">
                    <button className="color-btn yellow"  onClick={() => { this.setNoteBgColor('yellow') }}></button>
                    <button className="color-btn teal" onClick={() => { this.setNoteBgColor('teal') }}></button>
                    <button className="color-btn red" onClick={() => { this.setNoteBgColor('red') }}></button>
                    <button className="color-btn green" onClick={() => { this.setNoteBgColor('green') }}></button>
                    <button className="color-btn blue" onClick={() => { this.setNoteBgColor('blue') }}></button>
                    <button className="color-btn pink" onClick={() => { this.setNoteBgColor('pink') }}></button>

                </div>}
            </React.Fragment>
        </section>
    }
}

