import { User } from "./User";

export class Admin extends User {
    public readonly yearBorn: number;

    constructor(firstName: string, lastName: string, email: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;

        this.yearBorn = this.getYear();
    }

    private getYear(): number {
        return this.dob.getFullYear()
    }
}