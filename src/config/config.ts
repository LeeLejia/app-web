export const config = {
  protocol : 'http',
  host: 'www.cjwddz.cn',
  port: 80,
  proName: '方塘',
  api: {
    forgetPwd: '/api/forget',
    register: '/api/register',
    login: '/api/login',
    logout: '/api/logout',
  },
  urls: {
    login: '/login',
    register: '/register',
    forgetPwd: '/forget',
  },
  roles: {
    developer: {
      name: 'developer',
      home: '/developer/home',
      nav: [
        {type: '应用', icon: '', routers: [
          {name: '笔记', url: '/developer/home/note', icon: 'icon-note', checked: true},
          {name: '应用', url: '/developer/home/apps', icon: 'icon-app', checked: false},
          {name: '邀请码', url: '/developer/home/codes', icon: 'icon-code', checked: false},
          {name: '系统日志', url: '/developer/home/slog', icon: 'icon-slog', checked: false},
          ]},
        {type: '消息', icon: '', routers: [
          {name: '消息', url: '/developer/home/msg', icon: 'icon-msg', checked: false},
          {name: '问题', url: '/developer/home/issue', icon: 'icon-issue', checked: false},
          {name: '收款码', url: '/developer/home/qr', icon: 'icon-qr', checked: false},
        ]},
        ]
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
};
