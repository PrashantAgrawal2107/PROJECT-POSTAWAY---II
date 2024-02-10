export default class UserModel {
    constructor(name, email, password,gender, id) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.gender = gender;
      this._id = id;
    }

    static getAll() {
        return users;
      }
  
  }
  
  let users = [
    {
      id: 1,
      name: 'User 1',
      email: 'user1@postway.com',
      password: 'Password1',
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@postway.com',
      password: 'Password2',
    },
  ];