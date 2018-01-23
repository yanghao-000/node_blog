let mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://127.0.0.1/node_blog');
// 定义用户集合的模型，规定了属性和类型
let UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});
// 定义用户模型
let User = mongoose.model('User', UserSchema);
// 把用户模型挂载到到处对象
exports.User = User;