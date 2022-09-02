import { Twilio } from 'twilio'
import { config } from 'dotenv'
config()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioNumber = process.env.TWILIO_PHONE_NUMBER

type SMSForm = {
  borrowerName: string
  borrowerPhone: string
  debtName: string
  outstandingAmount: number
  interestRate?: number
  minimalPayment: number
  _id?: string
}

export const sendSMS = async ({
  borrowerName,
  borrowerPhone,
  outstandingAmount,
  debtName,
  minimalPayment
}: SMSForm) => {
  if (accountSid && authToken && twilioNumber && borrowerPhone) {
    const client = new Twilio(accountSid, authToken)

    client.messages
      .create({
        from: twilioNumber,
        to: borrowerPhone,
        body: `Hey ${borrowerName}! You have an outstanding amount of 
            ${outstandingAmount} for ${debtName}.Please don't forget 
            to pay your minimum monthly payment of ${minimalPayment} / month.`
      })
      .then(message => console.log(message.sid))
  } else {
    console.error('You are missing one of the variables you need to send a message')
  }
}
