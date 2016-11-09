/**
 * Created by Igor on 23.10.2016.
 */


const Server = require('./server.js')
const port = (process.env.PORT || 8080)
const app = Server.app()

if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const config = require('./webpack.dev.config.js')
    const compiler = webpack(config)

    app.use(webpackHotMiddleware(compiler))
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }))
}


var fs = require('fs');
var usersFilePath = './serverfiles/test.json';
var bodyParser = require('body-parser')

var myData = function () {
    let dataSend = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(dataSend) || {todos:[]};
}

app.use(bodyParser.json());

app.get('/getall', function(req, res){
    var dataResponse =  myData().todos;
    setTimeout(() => {
        res.json(dataResponse);
    },1000)

});

app.get('/getdone', function(req, res){
    var dataResponse =  myData().todos.filter(t => t.done);
    setTimeout(() => {
        res.json(dataResponse);
    },1000)

});



app.get('/getundone', function(req, res){
    var dataResponse =  myData().todos.filter(t => !t.done);
    setTimeout(() => {
        res.json(dataResponse);
    },1000)

});

function addTodoToList(todo) {
    var newData;
    var getData = myData();
    getData.todos.push(todo);

    newData = JSON.stringify(getData);
    fs.writeFile(usersFilePath, newData, function (err) {
        if (err) return console.log(err);
    })
}

app.post('/add', function(req, res){
    console.log(req.body)
    addTodoToList(req.body)
    res.send('all OK')
});

function toggleTodo(id) {
    var newData = {};
    newData.todos = myData().todos.map(todo => {
        if (todo.id === id){
            todo.done = !todo.done
            return todo
        }
        return todo
    });

    newData = JSON.stringify(newData);

    fs.writeFile(usersFilePath, newData, function (err) {
        if (err) return console.log(err);
    })
}

app.post('/toggle', function(req, res){
    console.log(req.body.id)
    toggleTodo(req.body.id)
    res.send('all OK')
});

function delTodo(id) {
    var newData = {};
    newData.todos = myData().todos.filter(todo => {
        if (todo.id !== id){
            return true;
        }
    });

    newData = JSON.stringify(newData);

    fs.writeFile(usersFilePath, newData, function (err) {
        if (err) return console.log(err);
    })
}



app.post('/deltodo', function(req, res){
    console.log(req.body.id)
    delTodo(req.body.id)
    res.send('all OK')
});

/*app.get(/.*!/, function(req, res) {
    res.sendFile( __dirname + '/index.html')
})*/





/*app.use(express.static('setverfiles')*/


app.listen(port)
console.log(`Listening at http://localhost:${port}`)


