export class notification {
  constructor(
    ChannelType:  'SMS' | 'Email' | 'In App',
    SenderID: number,
    RecieverID: number,
    SendingDate: Date,
    Creatortype: boolean,
    CreationDate: Date,
    Description: string
  ) {}
}
