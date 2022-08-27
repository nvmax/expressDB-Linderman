const router = require('express').Router();
const fs = require('fs');
// https://www.npmjs.com/package/uuid
const uuid = require('uuid');
// get method to get all notes from the notes.json file
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    }
    );
}
);
// post method to add a new note to the db.json file using a unique id and the title and text from the request body
router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        // use uuid to generate unique id for each note 
        const newNotes = {
            // https://www.npmjs.com/package/uuid used information to generate unique id for each note using v4
            id: uuid.v4(),
            title: req.body.title,
            text: req.body.text
        };
        const db = JSON.parse(data);
        db.push(newNotes);
        fs.writeFile('./db/db.json', JSON.stringify(db, null, 2), (err) => {
            if (err) throw err;
            res.json(db);
        }
        );
    }
    );
}
);
// delete method to delete a note from the db.json 
router.delete('/notes/:id', function(req, res){
   let id = req.params.id;
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        let db = JSON.parse(data);
        let newDb = db.filter(note => note.id !== id);
        fs.writeFile('./db/db.json', JSON.stringify(newDb, null, 2), (err) => {
            if (err) throw err;
            res.json(newDb);
        }
        );
    }
    );
}
);

module.exports = router;
