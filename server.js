const express = require('express');
const cors = require('cors'); // Import the cors package
const os = require('os');

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

app.get('/api/username', (req, res) => {
    const username = os.userInfo().username;
    console.log('os.userInfo()',os.userInfo())
    res.json({ username });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
