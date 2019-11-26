import { Context, controller, get, inject, provide, post  } from 'midway';

@provide()
@controller('/user')
export class UserController {
  @inject()
  ctx: Context;
  @get('/getAllUser')
  async getAllUser(): Promise<void> {
   this.ctx.body = {success: true, message: 'OK', data: []};
  }
  @post('/addUser')
  async addUser(): Promise<void> {
    console.log(this.ctx.request.body);
    this.ctx.body = '添加成功';
  }
}
