export const config = {
  protocol : 'http',
  host: 'localhost',
  port: 80,
  proName: 'my-site',
  urls: {
    forgetPwd: '/forget',
    register: '/register',
    login: '/login',
    logout: '/logout',
    develper: {
      root: '/developer',
      home: '/developer/home',
    },
  },
  roles: {
    developer: {
      name: 'developer',
      home: '/developer/home',
    },
    admin: {
      name: 'admin',
      home: 'http://www.baidu.com',
    },
    common: {
      name: 'common',
      home: 'http://www.baidu.com',
    }
  },
  codes: {
    success: 200,
    AuthenticationFail: 403,
  },
}
