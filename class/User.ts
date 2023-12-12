export class User {
    private _firstName: string;
    private _lastName: string;
    private _email: string;

    set firstName(name: string) {
        this._firstName = name;
    }

    set lastName(name: string) {
        this._lastName = name;
    }

    set email(value: string) {
        this._email = value;
    }

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    public doesEmailMatch(value: string): boolean {
        return this._email === value;
    }
}