export class User {
    firstName: string;
    age: number;
    email: string;

    constructor(firstName: string, email: string, age: number) {}
}

class BaseUser extends User {
    protected role: string;

    public hasAllAccess(): boolean {
        return this.role == 'Admin';
    }
}

export class SuperAdmin extends BaseUser {
    role = 'Admin';
    password: string;

    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
    }

    // override
    public hasAllAccess(): boolean {
        return true;
    }
}
