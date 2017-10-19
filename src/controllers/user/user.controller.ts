import { plainToClass } from "class-transformer";
import {
  Body,
  Param,
  HttpCode,
  JsonController,
  Post,
  Get
} from "routing-controllers";
import { Inject } from "typedi";
import { IUser, User, UserService } from "../../entities/user";

@JsonController("/user")
export class UserController {
  @Inject() private userService: UserService;

  @Post()
  @HttpCode(201)
  public httpPost(
    @Body({
      required: true
    })
    props: IUser
  ): Promise<any> {
    let user = plainToClass(User, props);
    return this.userService.create(user);
  }

  @Get()
  public httpGetAll(): Promise<User[]> {
    return this.userService.readAll();
  }

  @Get("/:id")
  public httpGet(@Param("id") id: number): Promise<any> {
    return this.userService.readOne(id);
  }

  @Get("/email/:email")
  public httpGetEmail(@Param("email") email: string): Promise<any> {
    return this.userService.readOneByEmail(email);
  }
}
