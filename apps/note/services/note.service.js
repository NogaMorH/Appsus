import { storageService } from '../services/storage.service.js'
import { utilService } from '../services/util.service.js'

export const notesService = {
    query
}

const STORAGE_KEY = 'notesDB'

const notes = [
    {
        id: 'n101',
        type: 'note-txt',
        isPinned: true,
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        id: 'n102',
        type: 'note-img',
        info: {
            url: 'http://some-img/me',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: 'n103',
        type: 'note-todos',
        info: {
            label: 'Get my stuff together', todos: [
                { txt: 'Driving liscence', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 }
            ]
        }
    }
]

function query() {
    let notes = _loadNotesFromStorage()
    if (!notes) {
        notes = _createNotes()
        _saveNotesToStorage(notes)
    }
    return Promise.resolve(notes)
}

function _createNotes() {
    const notes = []
    for (let i = 0; i < 5; i++) {
        const note = {
            id: utilService.makeId(4),
            type: 'note-text',
            isPinned: false

        }
    }
}

function _saveNotesToStorage(notes) {
    storageService.saveToStorage(STORAGE_KEY, notes)
}

function _loadNotesFromStorage() {
    storageService.loadFromStorage(STORAGE_KEY)
}