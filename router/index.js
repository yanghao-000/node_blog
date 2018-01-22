let express = require('express');
//得到一个路由中间件实例
let router = express.Router();

router.get('/', function(req, res){
  //路由是相对路径
  res.render('index', {
    title: "首页"
  })
  //res.send('首页');
});

module.exports = router;