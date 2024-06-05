require('@babel/register')({ 
    extensions: ['.js', '.ts', '.tsx'],
    presets: ["@babel/preset-react", "@babel/preset-env"]
});
const express = require ('express');
// const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const redis = require('redis');
const RedisStore = require('connect-redis').default;
const mongoose = require('mongoose');
const status = require ('express-status-monitor');

const mongodbUri = "mongodb://localhost:27017/reactdemo";


mongoose.connect(mongodbUri).then(
    () => {
        console.log('Connected to MongoDB !!');
    }).catch(err => {
        console.log(' MongoDB connection error => ', err);
    });

const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379
});
redisClient.connect().catch(console.error);
// const RedisStore = connectRedis(session);
const redisStore = new RedisStore({
    client: redisClient
})


const app = express();
const port = 8000;

app.set('view engine', 'hbs')
app.set('views', './views')
// session data will be persisten for current user until he stops communication with our server
// we are telling our server that this particular user/browser is using this particular session
app.use(session({
    store: redisStore,
    secret: 'secret key to sign the cookie for each user',
    resave: false,
    saveUninitialized: false,
}))
app.use(express.json());
// app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'dist')));
// app.use('/styles', express.static(path.resolve(__dirname, 'dist/styles')));
app.use(express.static(path.resolve(__dirname, 'jsConcepts')));
// app.use(express.static(path.resolve(__dirname, 'views')));

app.use(require('./router'));
app.use(status()); // now we can see status at localhost:8000/status
const server = app.listen(port, () => {
    console.log('session secret = > ', session);
    console.log("server running on port ", port);
});
