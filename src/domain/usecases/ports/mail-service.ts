export interface IMessage {
  readonly to: string;
  readonly from: string;
  readonly subject: string;
  readonly html: any;
  readonly amp: boolean;
  // readonly attachments?: Object[]
}

export interface IMailProvider {
  sendMail: (message: IMessage) => Promise<void>;
}
