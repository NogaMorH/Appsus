import { storageService } from '../../../storage.service'
import { utilService } from '../../../services/util.service'

export const notesService = {
    query
}

const STORAGE_KEY = 'notesDB'

const gNotes = [
    {
        id: utilService.makeId(),
        type: 'note-txt',
        isPinned: true,
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        id: utilService.makeId(),
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
        id: utilService.makeId(),
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
        notes = gNotes
        _saveNotesToStorage(notes)
    }

    return Promise.resolve(notes)
}

function _saveNotesToStorage(notes) {
    storageService.saveToStorage(STORAGE_KEY, gNotes)
}

function _loadNotesFromStorage() {
    storageService.loadFromStorage(STORAGE_KEY)
}