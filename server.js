let express = require('express');
let path = require('path');
let app = express();
//设置模板引擎html
app.set('view engine', 'html');
//指定模板的存放根目录
app.set('views', path.resolve('views'));
//指定对于html类型的模板使用ejs方法来进行渲染
app.engine('html', require('ejs').__express);
//此静态文件中间件会拦截客户端对于静态文件的请求，在指定目录下找，如果找到返回并结束请求
app.use(express.static(path.resolve('node_modules')));

let index = require('./router/index.js');
let user = require('./router/user.js');
let article = require('./router/article.js');

//客户端请求的路径为‘/’ 交由index处理
app.use('/', index);
app.use('/user', user);
app.use('/article', article);
app.listen(8080);

