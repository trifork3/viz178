import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import config from './config.js';
import fs from 'fs';

const app = express();
const port = config.port;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(port, () => {
    console.log(`[express] Listing on port ${port}`);
});

app.use(express.json());

app.use('/api', express.Router());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

app.get('/api/media', (req, res) => {
    let json = { urls : [] };
    fs.readdir('/assets/media/', (err, files) => {
        if (err) {
            return console.log("[express] Unable to read /assets/media/");
        }

        files.forEach((file) => {
            json.urls.push('/assets/media/' + file);
        });
    });

    res.json(urls);
});