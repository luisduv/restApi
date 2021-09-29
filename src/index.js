const express = require('express');
const app = express();
const morgan = require('morgan');


app.set('port', process.env.PORT ||  3000);


app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//rutas
app.use(require('./rutas/index'));
app.use('/api/movies', require('./rutas/movies'));
app.use('/api/users', require('./rutas/users'));


app.listen(app.get('port'), () => {
console.log(`servidor en el puerto ${app.get('port')}`);
});




