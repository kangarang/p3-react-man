const PORT = process.env.PORT || 8080; // deployment
// const PORT = process.env.PORT || 3000; // local
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
// const url = "https://peaceful-headland-12692.herokuapp.com/" // deployment mode
// const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY

app.use(cors());

app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res) => {
//   res.send(FIREBASE_API_KEY)
// })

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
)

app.listen(PORT, function() {
  console.log(PORT);
})
