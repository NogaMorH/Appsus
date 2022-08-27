import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    remove,
    createNote,
    addNote,
    getNoteById,
    save,
    copyNote,
    setNoteBgColor
}

const STORAGE_KEY = 'notesDB'

const gNotes = [
    {
        id: utilService.makeId(),
        type: 'text',
        isPinned: true,
        info: {
            title: 'FullStack',
            text: 'Fullstack Me Baby!'
        },
        style: {
            backgroundColor: 'teal'
        }
    },
    {
        id: utilService.makeId(),
        type: 'image',
        info: {
            url: 'https://www.travelandleisure.com/thmb/EOI9YwqppLli0TG5LsWrYz4wUAk=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/jellyfish-lake-reopening-JELLY119-6e2116ca23764b9aa0e56096db7973b4.jpg',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: 'white'
        }
    },
    // {
    //     id: utilService.makeId(),
    //     type: 'todos',
    //     info: {
    //         label: 'Get my stuff together', todos: [
    //             { text: 'Driving liscence', doneAt: null },
    //             { text: 'Coding power', doneAt: 187111111 }
    //         ]
    //     },
    //     style: {
    //         backgroundColor: 'white'
    //     },
    // },
    {

        id: utilService.makeId(),
        type: 'video',
        info: {
            url: "https://www.youtube.com/embed/DT-dxG4WWf4",
            title: 'Fleet Foxes - Mykonos'
        },
        style: {
            backgroundColor: 'white'
        }
    },
    {

        id: utilService.makeId(),
        type: 'video',
        info: {
            url: "https://www.youtube.com/embed/v=wO0A0XcWy88",
            title: 'Fleet Foxes - Mykonos'
        },
        style: {
            backgroundColor: 'white'
        }
    },
    {
        id: utilService.makeId(),
        type: 'text',
        isPinned: true,
        info: {
            title: 'Quotes',
            text: "Happiness is only real, when shared. ― Christopher McCandless"
        },
        style: {
            backgroundColor: 'white'
        }
    },
    {
        id: utilService.makeId(),
        type: 'text',
        isPinned: true,
        info: {
            title: 'CR',
            text: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
        },
        style: {
            backgroundColor: 'white'
        }
    },
    {
        id: utilService.makeId(),
        type: 'image',
        info: {
            url: 'https://lh3.ggpht.com/-kjfBnCLSUr8/UnCdF7NXbYI/AAAAAAAAti0/9kpiCidQWl4/rock-islands-palau-96.jpg?imgmax=800',
            title: 'Palau island'
        },
        style: {
            backgroundColor: 'white'
        }
    },
    {
        id: utilService.makeId(),
        type: 'image',
        info: {
            url: 'https://www.travelandleisure.com/thmb/EOI9YwqppLli0TG5LsWrYz4wUAk=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/jellyfish-lake-reopening-JELLY119-6e2116ca23764b9aa0e56096db7973b4.jpg',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: 'yellow'
        }
    },
    {

        id: utilService.makeId(),
        type: 'video',
        info: {
            url: "https://www.youtube.com/embed/v=TWcyIpul8OE",
            title: 'Fleet Foxes - Mykonos'
        },
        style: {
            backgroundColor: 'white'
        }
    }

]

function query(filterBy) {
    console.log('filterBy:from query service', filterBy)
    let notes = _loadNotesFromStorage()
    if (!notes) {
        notes = gNotes
        _saveNotesToStorage(notes)
    }

    if (filterBy) {
        let { text, type } = filterBy
        // console.log('title:', title)
        notes = notes.filter(note => {
            // console.log('note.info.title:', note.info.title)
            if (note.info.title) {
                return note.info.title.toUpperCase().includes(text.toUpperCase())
            }
            if (note.info.text) {
                return note.info.text.toUpperCase().includes(text.toUpperCase())
            }
        })
    }

    return Promise.resolve(notes)
}

function remove(noteId) {
    console.log('noteId:', noteId)
    let notes = _loadNotesFromStorage()
    console.log('notes:', notes)
    notes = notes.filter(note => note.id !== noteId)
    _saveNotesToStorage(notes)
    return Promise.resolve()
}

function save(note) {
    console.log('note from save:', note)
    if (note.id) return updateNote(note)
    else return addNote(note)
}

function updateNote(noteToUpdate) {
    console.log('noteToUpdate:', noteToUpdate)
    let notes = _loadNotesFromStorage()
    notes = notes.map(note => note.id === noteToUpdate.id ? noteToUpdate : note)
    _saveNotesToStorage(notes)
    return Promise.resolve(noteToUpdate)
}

function addNote({ title, text, type, url }) {
    let notes = _loadNotesFromStorage()
    const note = createNote(title, text, type, url)
    console.log('note:', note)
    notes.unshift(note)
    _saveNotesToStorage(notes)
    return Promise.resolve({ ...note })
}

function createNote(title, text, type, url) {
    console.log('type from service!!!!!:', type)
    let newNote = {
        id: utilService.makeId(),
        type,
        info: {
            title,
        },
        isPinned: false
    }
    if (newNote.type === 'img' || newNote.type === 'video') {
        newNote.info.url = url

    } else newNote.info.text = text
    return newNote

}

function copyNote(note) {
    console.log('note from servive copynote:', note)
    const notes = _loadNotesFromStorage()
    const noteCopy = createNoteCopy(note)
    notes.unshift(noteCopy)
    _saveNotesToStorage(notes)
    return Promise.resolve(notes)
}

function createNoteCopy(note) {
    const noteCopy = {
        id: makeId(),
        type: note.type,
        info: {
            title: note.info.title,
        },
        isPined: false
    }
    if (noteCopy.type === 'img' || noteCopy.type === 'video') {
        noteCopy.info.url = url

    } else noteCopy.info.text = text
    return noteCopy
}

function getNoteById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const notes = _loadNotesFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

function setNoteBgColor(noteId, color) {
    const notes = _loadNotesFromStorage()
    const note = notes.find(note => noteId === note.id)
    console.log('note id from bg:', note)
    note.style.backgroundColor = color
    // console.log('notes:', notes)
    // console.log('note.style.backgroundColor:', note.style.backgroundColor)
    _saveNotesToStorage(notes)

}


function _saveNotesToStorage(notes) {
    storageService.saveToStorage(STORAGE_KEY, notes)
}

function _loadNotesFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}