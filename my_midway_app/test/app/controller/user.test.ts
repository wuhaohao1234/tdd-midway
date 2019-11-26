import { app, assert } from 'midway-mock/bootstrap';

describe('test/app/controller/user.test.ts', () => {

  it('should assert', async () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
    // const ctx = app.mockContext({});
    // await ctx.service.xx();
  });
  it('获取所有的用户/', () => {
    return app.httpRequest()
      .get('/user/getAllUser')
      .expect('{"success":true,"message":"OK","data":[]}')
      .expect(200);
  });
  it('添加用户', () => {
    return app.httpRequest()
      .post('/user/addUser')
      .send({id: 1, name: '阿布'})
      .set('Accept', 'application/json')
      .expect('添加成功')
      .expect(200);
  });
});
