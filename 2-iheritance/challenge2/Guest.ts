import { User } from "./User";

export class Guest implements User {
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    get fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }

    doesEmailMatch(email: string): boolean {
        return this.email === email;
    }

}