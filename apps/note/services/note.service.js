import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const notesService = {
    query
}

const STORAGE_KEY = 'notesDB'

const gNotes = [
    {
        id: utilService.makeId(),
        type: 'note-text',
        isPinned: true,
        info: {
            title: '',
            text: 'Fullstack Me Baby!'
        }
    },
    {
        id: utilService.makeId(),
        type: 'note-img',
        info: {
            url: 'https://www.travelandleisure.com/thmb/EOI9YwqppLli0TG5LsWrYz4wUAk=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/jellyfish-lake-reopening-JELLY119-6e2116ca23764b9aa0e56096db7973b4.jpg',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: utilService.makeId(),
        type: 'note-todos',
        info: {
            label: 'Get my stuff together', todos: [
                { text: 'Driving liscence', doneAt: null },
                { text: 'Coding power', doneAt: 187111111 }
            ]
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

function _saveNotesToStorage(notes) {
    storageService.saveToStorage(STORAGE_KEY, notes)
}

function _loadNotesFromStorage() {
    storageService.loadFromStorage(STORAGE_KEY)
}