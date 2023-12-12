export class Message {
    title: string;
    message: string;
    isSent: boolean;

    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.isSent =false;
    }

    get messageStatus(): string {
        const sentMessage = this.isSent ? 'Has been sent.' : 'Has not been sent.';
        return `${this.message} | ${sentMessage}`;
    }

    previewMessage(): string {
        return this.message.slice(0, 15).concat('...');
    }
}

const message = new Message(
    'Unlock Your Potential with TypeScript Mastery',
    'Master TypeScript: Dive into Object-Oriented Programming (OOP)!'
);

// test

message.messageStatus;
message.previewMessage();