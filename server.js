const express = require('express');
const basicAuth = require('express-basic-auth');

function main() {
    let server = express();

    const basicAuthMiddleware = basicAuth({
        challenge: true,
        users: {'admin': 'supersecret'}
    });

    // für alle Routes
    // server.use(basicAuthMiddleware)

    server.use('/top-secret', basicAuthMiddleware, (req, res) => {
        res.send('Secret Route')
    })

    server.use('/public', (req, res) => {
        res.send('Public Route')
    })

    const port = process.env.PORT || 8000;
    server.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();
