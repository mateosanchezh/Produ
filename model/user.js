class User {
    constructor(id, username, fullname, password) {
        this._id = id;
        this._username = username;
        this._fullname = fullname;
        this._password = password;
    }

    // Getter y Setter para 'id'
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    // Getter y Setter para 'username'
    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    // Getter y Setter para 'fullname'
    get fullname() {
        return this._fullname;
    }

    set fullname(value) {
        this._fullname = value;
    }

    // Getter y Setter para 'password'
    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}


