import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAll(req: Request): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<User>;
}
