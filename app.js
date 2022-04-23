const express = require('express')

const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

const app = express()
const port = process.env.PORT || 3000 // Heroku will need the PORT environment variable

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App is live on port ${port}!`))