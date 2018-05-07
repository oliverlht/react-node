const express = require('express');
const mongoose = require('mongoose');

// 连接mongo
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo connect success');
})

// 建表
const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true }
}))

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

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>');
});
app.get('/add', function (req, res) {
    User.create({
        user: 'xiaoming',
        age: 12
    }, function (err, doc) {
        if (!err) {
            console.log(doc);
            res.send('添加小明成功')
        } else {
            console.log(err)
        }
    });
    // User.findOne({ user: 'xiaoming' }, function (err, doc) {
    //     res.json(doc)
    // })
});
app.get('/data', function (req, res) {
    User.findOne({ user: 'xiaoming' }, function (err, doc) {
        res.json(doc)
    })
});

app.listen(9093, function () {
    console.log('node app start at port 9093')
})