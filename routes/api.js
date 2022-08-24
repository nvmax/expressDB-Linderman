const fs = require('fs');
const express = require('express');
const app = express();

// app get api notes 

app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(data);
    }
    );
}
);

app.get('/api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const note = data.filter(note => note.id === req.params.id);
        res.json(note);
    }
    );
}
);

// app post api notes
app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const newNote = {
            id: data.length + 1,
            title: req.body.title,
            text: req.body.text
        };
        data.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(data), (err) => {
            if (err) throw err;
            res.json(newNote);
        }
        );
    }
    );
}
);

// app delete api notes
app.delete('/api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const note = data.filter(note => note.id !== req.params.id);
        fs.writeFile('./db/db.json', JSON.stringify(note), (err) => {
            if (err) throw err;
            res.json(note);
        }
        );
    }
    );
}   
);

module.exports = app;