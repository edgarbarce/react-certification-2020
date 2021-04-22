import loginApi from './login-api';

describe('loginApi', () => {
  it('correct user and password should retrieve object', async () => {
    const result = await loginApi('wizeline', 'Rocks!');
    expect(result.id).toEqual('123');
    expect(result.name).toEqual('Wizeline');
  });
  it('wrong user or password should return error', async () => {
    expect.assertions(1);
    await loginApi('wrongUser', 'Rocks!').catch((e) =>
      expect(e.message).toEqual('Username or password invalid')
    );
  });
});
