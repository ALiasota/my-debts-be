import sgMail from '@sendgrid/mail'
export const sendMail = async (name: string, days: number) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
  const msg = {
    to: 'andrew.lyasota@ventur.digital',
    from: '0hitman0@rambler.ru',
    subject: 'Debt',
    // text: 'Hello plain world!',
    // html: '<p>Hello HTML world!</p>',
    templateId: 'd-961efebf9acb4517814bba033d7f09ff',
    dynamic_template_data: {
      name,
      days
    }
  }
  await sgMail.send(msg)
}
