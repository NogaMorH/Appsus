import { utilService } from '../../../services/util.service'

export {
    query
}

gMails = [
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: utilService.makeId(),
        subject: 'Welcome to Github!',
        body: 'You are the newest member in this community of over 83 million people who use GitHub to host and review code, manage projects, and build software. Get started!',
        isRead: true,
        sentAt: 1551133930987,
        to: 'momo@momo.com'
    },
    {
        id: utilService.makeId(),
        subject: 'Meeting in Tuesday',
        body: 'Are you coming?',
        isRead: true,
        sentAt: 1551133930562,
        to: 'momo@momo.com'
    }
]

function query() {

}