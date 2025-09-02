import Mock from 'mockjs'

//存储注册过的用户
const userDB = []
// console.log(userDB)

export default [
  // 登录接口
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body || {}
      // 查找用户
      const user = userDB.find((u) => u.username === username)
      if (!user) {
        return { code: 401, message: '您还未注册' }
      }
      if (user.password !== password) {
        return { code: 401, message: '用户名或密码错误' }
      }
      return {
        code: 0,
        message: '登录成功',
        data: {
          token: Mock.Random.string('lower', 16),
          user: {
            id: user.id,
            username: user.username,
            password: user.password,
          },
        },
      }
    },
  },

  // 注册接口
  {
    url: '/api/auth/register',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body || {}
      if (!username || !password) {
        return { code: 400, message: '缺少用户名或密码' }
      }
      // 查重
      const exist = userDB.find((u) => u.username === username)
      if (exist) {
        return { code: 400, message: '您已注册' }
      }
      // 新用户
      const newUser = {
        id: Mock.Random.guid(),
        username,
        password,
      }
      userDB.push(newUser)
      return {
        code: 0,
        message: '注册成功',
        data: newUser,
      }
    },
  },
]
