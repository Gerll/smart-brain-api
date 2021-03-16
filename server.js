const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
//const app = express();
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'perros21',
        database : 'smart-brain'
    }
});

const app = express();
app.use (bodyParser.json());

app.use(cors())
app.get('/', (req, res) => { res.send(database.users) })
//  signin
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) } )
//  register
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
// Profile/:userID
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })
//  Image
app.put('/image', (req, res) => { image.handleImage (req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall (req, res) })

app.listen(3000,()=>{
    console.log('app is running on port 3000');
})