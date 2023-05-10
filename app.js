const express = require('express');

const path = require('path');

const app = express();

//const publicPath = path.resolve(__dirname, './public');
//app.use(express.static(publicFolderPath));

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
}); 

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/formularioRegistro.html'));
})


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/css/styles.css'));
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/css/style.css' ));
})