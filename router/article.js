let express = require('express');
//得到一个路由中间件实例
let router = express.Router();

router.get('/add', function(req, res){
  res.render('article/add', {
    title: "发表文章"
  })
});

module.exports = router;