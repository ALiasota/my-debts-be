import { Twilio } from 'twilio'
import { config } from 'dotenv'
import { NotifyForm, ExtraNotifyForm } from '../types/notify.types'
config()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioNumber = process.env.TWILIO_PHONE_NUMBER

export const sendNotify = async ({
  borrowerName,
  borrowerPhone,
  outstandingAmount,
  debtName,
  minimalPayment
}: NotifyForm) => {
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

export const sendExtraNotify = async ({
  borrowerName,
  borrowerPhone,
  extraPayment,
  saveAmount,
  saveYears,
  saveMonthes
}: ExtraNotifyForm) => {
  if (accountSid && authToken && twilioNumber && borrowerPhone) {
    const client = new Twilio(accountSid, authToken)

    client.messages
      .create({
        from: twilioNumber,
        to: borrowerPhone,
        body: `Hey ${borrowerName}!
                Pay extra ${extraPayment}/month.
                And you'll save $${saveAmount} and ${saveYears} y, ${saveMonthes} months`
      })
      .then(message => console.log(message.sid))
  } else {
    console.error('You are missing one of the variables you need to send a message')
  }
}
