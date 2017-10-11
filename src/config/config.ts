export const config = {
  protocol : 'http',
  host: 'localhost',
  port: 8080,
  proName: 'my-app',
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
