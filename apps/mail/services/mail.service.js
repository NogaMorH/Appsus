import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const mailService = {
    query
}

const STORAGE_KEY = 'mailsDb'
const gMails = [
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
        from: {
            senderName: 'Lulu',
            senderAddress: 'lulu@lulu.com'
        }
    },
    {
        id: utilService.makeId(),
        subject: 'Welcome to Github!',
        body: 'You are the newest member in this community of over 83 million people who use GitHub to host and review code, manage projects, and build software. Get started!',
        isRead: true,
        sentAt: 1551133930987,
        to: 'momo@momo.com',
        from: {
            senderName: 'Github',
            senderAddress: 'noreply@github.com'
        }
    },
    {
        id: utilService.makeId(),
        subject: 'Meeting in Tuesday',
        body: 'Are you coming?',
        isRead: true,
        sentAt: 1551133930562,
        to: 'momo@momo.com',
        from: {
            senderName: 'Eliyahu',
            senderAddress: 'eliyahu@gmail.com'
        }
    }
]

function query() {
    let mails = _loadMailsFromStorage()
    if (!mails) {
        mails = gMails
        _SaveMailsToStorage(mails)
    }
    return Promise.resolve(mails)
}

function _loadMailsFromStorage() {
    const { loadFromStorage } = storageService
    return loadFromStorage(STORAGE_KEY)
}

function _SaveMailsToStorage(mails) {
    const { saveToStorage } = storageService
    saveToStorage(STORAGE_KEY, mails)
}