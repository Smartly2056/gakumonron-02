// server.js
const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// アップロードされた写真の保存先
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), (req, res) => {
  // アップロードが成功したら何かしらの処理を実行
  res.send('Photo uploaded!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
