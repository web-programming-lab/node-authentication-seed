const express = require('express');
const bodyParser = require('body-parser')
let jwt = require('jsonwebtoken');
let config = require('./config');
let middleware = require('./auth-middleware');

const dbUser = {
    "admin": {
        password: 'password'
    }
}

class LoginHandler {

    login(req, res) {
        let {username, password} = req.body;

        if (username && password && dbUser[username]) {
            if (password === dbUser[username].password) {

                let token = jwt.sign({username: username},
                    config.secret,
                    {
                        expiresIn: '24h',
                        issuer: 'node-authentication-seed'
                    }
                );
                // return the JWT token for future API calls
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    token: token
                });
            } else {
                res.send(403).json({
                    success: false,
                    message: 'Incorrect username or password'
                });
            }
        } else {
            res.send(400).json({
                success: false,
                message: 'Authentication failed! Please check the request'
            });
        }
    }

    index(req, res) {
        res.json({
            success: true,
            message: 'Index page'
        });
    }
}

function main() {
    let app = express();

    let handlers = new LoginHandler();

    const port = process.env.PORT || 8000;

    // Middleware Registration
    app.use(express.json()) // parse application/json

    // Routes & Handlers
    app.post('/login', handlers.login); // Public route

    app.get('/', middleware.checkToken, handlers.index); // Protected route


    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();