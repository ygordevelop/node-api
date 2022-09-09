import { User } from '../model';

class UserService {
    async createUser() {
        const newUser = new User(req.body);

        console.log(newUser);

        return true;
    }
}
