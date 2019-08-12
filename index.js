const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const {formateTextFile} = require('./data/utils');


const adapter = new FileSync('db.json');
const db = low(adapter);

const express = require('express');
const app = express();
const fs = require('fs');
const films = fs.readFileSync("./data/sample_movies.txt").toString('utf-8');

const filmsArray = formateTextFile(films);
db.defaults({films: []}).write();
function createFilmsArray (data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let filmInfo = {};
     for (let k = 0; k < data.length; k++) {
         if (data[i][k] && data[i][k][0] !== '') {
             filmInfo[data[i][k][0]] = data[i][k][1];
             console.log(i, ' ', k);
             console.log(data[i][k]);
         }
     }
     result.push(filmInfo);
    }
    return result;
}

let array = createFilmsArray(filmsArray);

for (let i = 0; i > array.length; i++) {
    db.get('films')
        .push(array[i])
        .write();
}
















// // Set some defaults (required if your JSON file is empty)
// db.defaults({ posts: [], user: {}, count: 0 })
//     .write();
//
// // Add a post
// db.get('posts')
//     .push({ id: 1, title: 'lowdb is awesome'})
//     .write();
//
// // Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode')
//     .write();
//
// // Increment count
// db.update('count', n => n + 1)
//     .write();