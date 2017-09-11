const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: '服务开通云化',
  prefix: 'iom-web',
  footerText: '中兴软创  © 2017 ',
  logo: '/iom-web/resources/react/logo.png',
  iconFontCSS: '/iom-web/resources/react/iconfont.css',
  iconFontJS: '/iom-web/resources/react/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
