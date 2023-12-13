export class User {
    public readonly id: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    protected dob: Date;


    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    doesEmailMatch(email: string): boolean {
        return this.email === email;
    }
}
