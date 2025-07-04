const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // this will be inside container
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
