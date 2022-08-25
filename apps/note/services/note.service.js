import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const NoteService = {
    query,
    remove,
    createNote,
    addNote,
    getNoteById
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
            backgroundColor: 'white'
        }
    },
    {
        id: utilService.makeId(),
        type: 'todos',
        info: {
            label: 'Get my stuff together', todos: [
                { text: 'Driving liscence', doneAt: null },
                { text: 'Coding power', doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: 'white'
        }
    }
]

function query() {
    let notes = _loadNotesFromStorage()
    if (!notes) {
        notes = gNotes
        _saveNotesToStorage(notes)
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

function addNote({ title, text, type, url }) {
    let notes = _loadNotesFromStorage()
    const note = createNote(title, text, type, url)
    notes.unshift(note)
    _saveNotesToStorage(notes)
    return Promise.resolve(note)
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

function getNoteById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const notes = _loadNotesFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}



function _saveNotesToStorage(notes) {
    storageService.saveToStorage(STORAGE_KEY, notes)
}

function _loadNotesFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}