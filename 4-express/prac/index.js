//三种dependencies：dependencies，devDependencies，global dependencies
//基本不用全局安装了（-g），除了CLI，create-react-app就是一种cli
//不用全局安装的一个原因是npx，在cli之前加上npx就不用-g安装了。比如：npx create-react-app
//不用全局安装的另一个原因是，全局安装是装在电脑里，不是项目里，package.json没有全局包
//  所以别人下载你的代码不知道你装了什么全局包，不适合team work

const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('listening on 3000');
});
