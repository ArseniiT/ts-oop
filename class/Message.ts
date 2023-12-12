export class Message {
    title: string;
    message: string;
    isSent: boolean;

    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.isSent =false;
    }

    previewMessage(): string {
        return this.message.slice(0, 15).concat('...');
    }
}

const message2 = new Message(
    'Unlock Your Potential with TypeScript Mastery',
    'Master TypeScript: Dive into Object-Oriented Programming (OOP)!'
);