import * as sgMail from '@sendgrid/mail'

type Msg = {
  to: string
  from: string
  subject: string
  text: string
  html: string
}

export const sendMail = (msg: Msg) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
  sgMail.send(msg)
}
