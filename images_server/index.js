const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('images'), (req, res) => {

    const tempPath = req.file.path;
    const targetDir = 'uploads/';
    const uniqueFilename = uuidv4();
    const targetPath = targetDir + uniqueFilename + req.file.originalname;

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir);
    }

    fs.rename(tempPath, targetPath, err => {
        if (err) return console.log(err, res);
        const imageUrl = `${req.protocol}://${req.hostname}:${PORT}/${targetPath}`;
        res.status(200).send(imageUrl);
    });
});


app.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = `uploads/${imageName}`;

    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404).send('Изображение не найдено');
        } else {
            res.sendFile(imagePath, { root: __dirname });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
