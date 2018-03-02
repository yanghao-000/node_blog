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
   req.session.user = null;
   res.redirect('/user/signin');
});
// 用户注册
router.post('/signup', function (req, res) {
   let user = req.body;
   User.create(user, function (err, doc) {
      if (err) {
         res.redirect('back');
      } else {
         res.redirect('/user/signin');
      }
   });
});
// 用户登录
router.post('/signin', function (req, res) {
   let user = req.body;
   User.findOne(user, function(err, doc){
      if (err) {
         res.redirect('back');
      } else {
         if(doc){
            req.session.user = doc;
            res.redirect('/');
         }else{
            res.redirect('back');
         }
      }
   });
});

module.exports = router;