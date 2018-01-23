let express = require('express');
//得到一个路由中间件实例
let router = express.Router();
let {User} = require('../model/index');

//真正请求路径‘/user/signup’
router.get('/signup', function (req, res) {
   res.render('user/signup', {
      title: "注册"
   });
});

router.get('/signin', function (req, res) {
   res.render('user/signin', {
      title: "登录"
   });
});

router.get('/signout', function (req, res) {
   res.send("退出")
});

router.post('/signup', function (req, res) {
   let user = req.body;
   User.create(user, function (err, doc) {
      if (err) {
         res.redireact('back');
      } else {
         res.redireact('/user/signin');
      }
   });
});

module.exports = router;