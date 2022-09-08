import Agenda from 'agenda'
import { sendMail } from './sgMail'

const msg = {
  to: 'andrew.lyasota@ventur.digital',
  from: '0hitman0@rambler.ru',
  subject: 'expiration',
  text: 'Your debt going to be expired soon',
  html: '<h1>Your debt going to be expired soon</h1>'
}

const agenda = new Agenda({ db: { address: process.env.MANGO_URL! } })
