"use strict";

const express = require('express');
const cors = require('cors'); // Add this line to import the cors middleware
const dataHandler = require('./controllers/data_handler');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get('/',
  (req, res) => res.send('Hello DASWorld!')
);
app.route('/home').get(
  (req, res) => res.send('DASWorld Home')
);

//Ejercicio Users
app.route('/api/users')
  .get((req,res)=>{
    res.set('Content-Type','application/json');
    res.send(dataHandler.getUsers());
  })
  .post((req,res)=>{
    let user = req.body;
    dataHandler.createUser(user);
    res.type('tet/plain');
    res.send('User ${user.nombre} was created');
  });

app.route('/api/users/:email')
  .get((req,res)=>{
      let email = req.params.email;
      res.json(dataHandler.getUserByEmail(email));
  })
  .put((req,res)=>{
    let email = req.params.email;
    let user = req.body;

    dataHandler.updateUser(email,user);
    res.type('text/plain');
    res.send('User ${user.nombre} was updated');
  })
  .delete((req,res)=>{
    let email = req.params.email;
    let user = req.body;

    res.type('text/plain');
    res.send('User ${user.nombre} was updated');
  })


//Movies

app.route('/api/movies')
  .get((req,res)=>{
    res.set('Content-Type','application/json');
    res.send(dataHandler.getMovies());
  })
  .post((req,res)=>{
    let movie = req.body;
    dataHandler.createMovie(movie);
    res.type('tet/plain');
    console.log(`movie ${movie.nombre} was created`);
  });


  app.route('/api/movie/:movie')
  .get((req,res)=>{
      let movie = req.params.movie;
      res.json(dataHandler.getMovieByTitle(movie));
  })
  .delete((req,res)=>{
    let movie = req.params.movie;

    res.type('text/plain');
    console.log(`movie ${movie.title} was updated`);
  })





  app.route('/api/series')
  .get((req,res)=>{
    res.set('Content-Type','application/json');
    res.send(dataHandler.getSeries());
  })
  .post((req,res)=>{
    let serie = req.body;
    dataHandler.createSerie(serie);
    res.type('tet/plain');
    console.log(`serie ${serie.title} was created`);
  });





app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})