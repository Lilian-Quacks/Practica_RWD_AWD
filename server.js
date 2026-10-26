const express = require('express');
const useragent = require('express-useragent');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(useragent.express());

// Redirección para evitar el error "Cannot GET /"
app.get('/', (req, res) => res.redirect('/responsive'));

app.get('/responsive', (req, res) => res.render('responsive'));

app.get('/adaptive', (req, res) => {
    const isMobile = req.useragent.isMobile || req.get('sec-ch-ua-mobile') === '?1';

    if (isMobile) {
        res.render('mobile');
    } else {
        res.render('desktop');
    }
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));