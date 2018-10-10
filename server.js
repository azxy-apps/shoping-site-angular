const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

/*
*   PROD related
*/
if (true) {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '/dist')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/dist', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening  on port ${port}`));
