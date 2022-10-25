const express = require('express');
const path = require('path');
//Initializations
const app = express();


//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //decir donde esta la carpeta views
app
//Middlewares

//Global Variables

//Routes

//Static Files

// Server is listennig
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});