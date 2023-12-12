export class Message {
    title: string;
    message: string;
    isSent: boolean;
}

export class Messages extends Array<Message> {
    public getValidMessages(messages: Message[]): Message[] {
        return this.filter(msg => msg.message.trim().length > 0);
    }

    static getValidMessages(messages: Message[]): Message[] {
        return messages.filter(msg => msg.message.trim().length > 0);
    }
}

Messages.getValidMessages([])