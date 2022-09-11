import Agenda, { Job } from 'agenda'
import { sendMail } from './sgMail'

const agenda = new Agenda({
  db: { address: process.env.MANGO_URL! }
})

export const agendaService = async (dates: { [key: string]: any }[], name: string) => {
  agenda.define('sendMail', async (job: Job) => {
    if (job.attrs.data) {
      const { name, days } = job.attrs.data
      await sendMail(name, days)
      console.log('sendMail')
    }
  })
  dates.forEach(item => {
    agenda.schedule(item.data, 'sendMail', { name, dais: item.days })
  })
}
export default agenda
