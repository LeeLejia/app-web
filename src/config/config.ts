export const config = {
  protocol : 'http',
  host: '139.199.219.24',
  port: 80,
  proName: '方塘',
  api: {
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
      home: '/developer/home',
    },
    common: {
      name: 'common',
      home: '/developer/home',
    }
  },
  codes: {
    success: 200,
    AuthenticationFail: 403,
  },
}
