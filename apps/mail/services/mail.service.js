import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const mailService = {
    query,
    addMail
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
    },
    {
        id: utilService.makeId(),
        subject: 'Changes in your shared folders',
        body: 'Activity in shared folders, Tommy and 11 others made changes in your shared folders?',
        isRead: false,
        sentAt: 1551133930121,
        to: 'momo@momo.com',
        from: {
            senderName: 'Dropbox',
            senderAddress: 'no-reply@dropbox.com'
        }
    },
    {
        id: utilService.makeId(),
        subject: 'Google Forms',
        body: 'Your form has a new response',
        isRead: true,
        sentAt: 1551133932123,
        to: 'momo@momo.com',
        from: {
            senderName: 'Google Forms',
            senderAddress: 'no-reply@google.com'
        }
    },
    {
        id: utilService.makeId(),
        subject: 'Are you joining us today?',
        body: 'Hey,For the first time ever,Maddie and Megan will be teaming up for a session about money mindset!',
        isRead: true,
        sentAt: 1551133930970,
        to: 'momo@momo.com',
        from: {
            senderName: 'Ines Mcneil',
            senderAddress: 'inesmc@gmail.com'
        }
    }, {
        id: utilService.makeId(),
        subject: 'Your new workspace explained',
        body: 'You have got all you need for a truly collaborative design proccec right in your workspace',
        isRead: false,
        sentAt: 1551133930654,
        to: 'momo@momo.com',
        from: {
            senderName: 'David The-Best',
            senderAddress: 'davidtb@gmail.com'
        }
    }, {
        id: utilService.makeId(),
        subject: 'Notion 2.15!',
        body: ' Notion almost died in 2015. We were building a product that we thought was cool — not a product that people needed. Our mission was (and still is) to give people the tools to customize their own software, but there was something missing. So my co-founder and I went back to the drawing board.',
        isRead: true,
        sentAt: 1551133939402,
        to: 'momo@momo.com',
        from: {
            senderName: 'Eliyahu',
            senderAddress: 'eliyahu@gmail.com'
        }
    }, {
        id: utilService.makeId(),
        subject: 'Your weekly stock update',
        body: 'Week 33: GLOB is down 2,2%. The USA stock market is down 1.9% over the past 7 days with the IT industry also down 3.1%',
        isRead: false,
        sentAt: 1551133930002,
        to: 'momo@momo.com',
        from: {
            senderName: 'Simply Wall St',
            senderAddress: 'simply-wall@gmail.com'
        }
    }, {
        id: utilService.makeId(),
        subject: 'Your storage is full',
        body: 'Hello Joe, your Dropbox storage is full, you have exceeded your storage plan and this means that your documents, photos and device data are no longer being backed up to Dropbox. To keep using these Dropbox services, you need to upgrade to Dropbox pro or reduce the amount of storage that you are using. sincerely, the Dropbox team',
        isRead: true,
        sentAt: 1551133930999,
        to: 'momo@momo.com',
        from: {
            senderName: 'Dropbox Team',
            senderAddress: 'no-reply@dropbox.com'
        }
    }, {
        id: utilService.makeId(),
        subject: 'Writing demo data',
        body: 'It\'s 1AM and I am writing demo data!',
        isRead: false,
        sentAt: 1551133930323,
        to: 'momo@momo.com',
        from: {
            senderName: 'Kfir Azulay',
            senderAddress: 'dd@gmail.com'
        }
    },
    {
        id: utilService.makeId(),
        subject: 'Everything for free',
        body: 'Where i go what i become or who i am or what i\'ll be i will never know',
        isRead: true,
        sentAt: 1551133930119,
        to: 'momo@momo.com',
        from: {
            senderName: 'Kelly\'s Choise',
            senderAddress: 'K\'s Choise@gmail.com'
        }
    },
    {
        id: utilService.makeId(),
        subject: 'SVG Ripples, Custom Shapes with CSS Grid',
        body: 'This week\'s Codepen community highlights include trippy portraits distorted with SVG ripples from scott, a two part tutorial on creating custom shapes with CSS grid from Afif, and a partical party from Matteo! ',
        isRead: false,
        sentAt: 1551133930562,
        to: 'momo@momo.com',
        from: {
            senderName: 'Codepen',
            senderAddress: 'support@codpen.io'
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

function addMail(mailData) {
    const loggedInUser = _getLoggedInUser()
    const { to, subject, body } = mailData
    let mails = _loadMailsFromStorage()
    const newMail = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: true,
        sentAt: Date.now(),
        to,
        from: {
            senderName: loggedInUser.fullName,
            senderAddress: loggedInUser.mailAddress
        }
    }
    mails.unshift(newMail)
    _SaveMailsToStorage(mails)
}

function _loadMailsFromStorage() {
    const { loadFromStorage } = storageService
    return loadFromStorage(STORAGE_KEY)
}

function _SaveMailsToStorage(mails) {
    const { saveToStorage } = storageService
    saveToStorage(STORAGE_KEY, mails)
}

function _getLoggedInUser() {
    const loggedInUser = {
        fullName: 'Mahatma Appsus',
        mailAddress: 'user@appsus.com'
    }
    return loggedInUser
}