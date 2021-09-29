const {Router} = require('express');
const router = Router();
const movies = require('../ejemplos.json');
const _ = require('underscore');


router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const {nombre , apellidos , edad} = req.body;
    if(nombre && apellidos && edad){
        const id = movies.length + 1;
        const newMovie = {id,...req.body};
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(500).json({error:'tenemos un error'});
    }
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {nombre , apellidos , edad} = req.body;
    if(nombre && apellidos && edad){
        _.each(movies, (movie,i) => {
                if(movie.id == id){
                    movie.nombre = nombre;
                    movie.apellidos = apellidos;
                    movie.edad = edad;
                }
        });
        res.json(movies)
    }else{
        res.status(500).json({error:'tenemos un error'});
    }
});



router.delete('/:id', (req, res) => {
    const { id } = req.params;
  _.each(movies,(movie,i)=>{
        if(movie.id == id){
            movies.splice(i,1);
        }
  });
  res.send(movies);
});




module.exports = router;