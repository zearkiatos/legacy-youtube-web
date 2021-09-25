const express = require('express');
const path = require('path');
const config = require('./src/config');

const app = express();

app.use(express.static(__dirname));

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
});

const banner = `
**************************
    Basic Node.js Server  👨‍💻
        For dev react ⚛ project  🚀
**************************
Status: Online  ✅
Listening on port: ${config.PORT} 🖥
`;

app.listen(config.PORT, () => {
    console.log(banner);
});