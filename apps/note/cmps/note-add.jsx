// export class NoteAdd extends React.Component {

//     state = {
//         note: {
//             text: '',
//             title: '',
//             type: 'text',
//             isPinned: false
//         }
//     }

//     handleChange = ({ target }) => {
//         const field = target.name
//         const value = target.value
//         this.setState((prevState) => ({
//             note: {
//                 ...prevState.note,
//                 [field]: value
//             }
//         }))
//     }

//     onSubmit = (ev) => {
//         ev.preventDefault()
//         this.props.onAddNote(this.state.note)

//     }



//     render() {
//         const { text, title, type, isPinned } = this.state.note
//         const { handleChange, onSubmit } = this
//         return <section className="add-note-container">
            // <form onSubmit={onSubmit} className="add-note-form">
                
            //         <input type="text"
            //             name="title"
            //             value={title}
            //             placeholder="Title:"
            //             onChange={handleChange} />

            //         <textarea
            //             name="text"
            //             id="text"
            //             placeholder="Take a note..."
            //             value={text}
            //             cols="35"
            //             rows="5"
            //             onChange={handleChange}>
            //         </textarea>
            //         <button className="btn btn-save">Save</button>
            
            // </form>
//             <section className="btn-container">
        
//             </section>
//             <div className="btn btn-pin">
//                 <button>pin</button>
//             </div>
//         </section>
//     }
// }