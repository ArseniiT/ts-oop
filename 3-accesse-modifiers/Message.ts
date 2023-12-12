export class Message {
    public readonly id: string;
    title: string;
    message: string;
    isSent: boolean;

    constructor(id: string) {
        this.id = id;
    }
}

export class Messages extends Array<Message> {
    public getValidMessages(messages: Message[]): Message[] {
        return this.filter(msg => msg.message.trim().length > 0);
    }

    static getValidMessages(messages: Message[]): Message[] {
        return messages.filter(msg => msg.message.trim().length > 0);
    }
}

Messages.getValidMessages([]);

const message = new Message('%$&^*%^');
// with readonly we can read it
message.id;
// with readonly we can't write it
// message.id = ')(*(^$';