import sgMail from '@sendgrid/mail'
import { type IMessage } from '../../../domain/usecases/ports/mail-service'

class EmailSender {
  constructor (private readonly apiKey: string) {
      sgMail.setApiKey(apiKey)
}

async sendEmail (message: IMessage): Promise<void> {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
    sgMail
      .send(message)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export default EmailSender