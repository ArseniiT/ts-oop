export class Message {
    title: string;
    message: string;
    private _isSent: boolean;
    deliveryDate: Date;

    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.isSent =false;
    }

    set isSent(isSent: boolean) {
        if(isSent) {
            this.deliveryDate = new Date();
        }
        this._isSent = isSent;
    }
    get isSent(): boolean {
        return this._isSent;
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

message.isSent = true;
message.messageStatus;
message.previewMessage();