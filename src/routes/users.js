const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', async (ctx, next) => {
  // 登录验证的逻辑
  const { username, password } = ctx.request.body
  ctx.body = {
    tag: 100,
    username,
    password
  }
})

module.exports = router
