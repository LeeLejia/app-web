export const config = {
  protocol : 'http',
  host: 'localhost',
  port: 80,
  proName: 'my-site',
  urls: {
    forgetPwd: '',
    register: '',
    login: '/login',
    logout: '/logout',
  },
  roles: {
    developer: {
      name: '',
      home: '',
    },
    admin: {
      name: '',
      home: '',
    },
    common: {
      name: '',
      home: '',
    }
  },
  codes: {
    success: 200,
    AuthenticationFail: 403,
  },
}
