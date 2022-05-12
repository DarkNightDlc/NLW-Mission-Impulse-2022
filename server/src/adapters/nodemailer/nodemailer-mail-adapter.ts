import { MailAdapter, sendMailData } from "../mail-adpter";
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "640ec13a84cd80",
      pass: "03a0e5402cebf7"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: sendMailData): Promise<void> {
        await transport.sendMail({
            from: '"Feedback" <oi@dark.com>',
            to: 'O homen apenas<pedronkdarck@Gmail.com>',
            subject,
            html: body,
        });
    }
}