const express = require('express');
const userRouter = require('./user.js')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


//添加数据
// User.create({
//     user: 'xiaohua',
//     age: 12
// }, function (err, doc) {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// });

// 删除数据
// User.remove({
//     age: 18
// },function(err,doc){
//     // console.log(doc)
// })

// 修改数据
// User.update({ user: 'xiaoming' }, { $set: { age: 20 } }, function (err, doc) {
//     console.log(doc)
// })

// 新建app
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user',userRouter);

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>');
});
app.get('/data', function (req, res) {
    User.findOne({user: 'xiaoming'}, function (err, doc) {
        res.json(doc)
    })
});

app.listen(9093, function () {
    console.log('node app start at port 9093')
})