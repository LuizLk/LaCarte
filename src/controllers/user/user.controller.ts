import { Body, Param, HttpCode, JsonController, Post, Get } from 'routing-controllers';
import { Inject } from 'typedi';
import { IUser, User, UserService } from '../../entities/user';

@JsonController('/user')
export class UserController {
  
  @Inject()
  private userService: UserService;

  @Post()
  @HttpCode(201)
  public httpPost(
    @Body({
      required: true
    }) props: IUser
    ): Promise<User> {
    return this.userService.create(props);
  }

  @Get()
  public httpGetAll (): Promise<User[]> {
    return this.userService.readAll();
  }

  @Get("/:id")
  public httpGet(
    @Param("id")
    id: string
    ): Promise<User> {
    return this.userService.readOne(parseInt(id));
  }
}
