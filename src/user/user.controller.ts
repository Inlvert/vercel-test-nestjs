import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  
  @Get()
  getAll(@Req() req: Request): Promise<User[]> {
    console.log((req as any).user);
    return this.userService.getAllUsers();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.creatUser(createUserDto);
  }
}

