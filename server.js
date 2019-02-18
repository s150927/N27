//das ist ein einzeiliger Kommentar 
/* Das ist ein mehrzeiliger Kommentar */

// Das express-Framework wird eingebunden 
// Ein Framework soll die Programmierung erleichtern 
// Das Framework muss mit npm installiert werden:
// im Terminal: npm install exprss --save 

// const express = require ('express')
// express muss über die internet seite installiert werden ( expressjs.com) 
// app.set ('view engine ', 'ejs')
// ejs muss wieder im Terminal installiert werden 
// app.use(express.static('public'))
// mit diesem befehl zeigt man der app wo die Statischen in halte sind 
app.get('/',(req,res,next) => {
 res,render('index.ejs', {
 })
} )
const express = require('express')
// Das appp-Objekt wird initalisiert 
// Das app-Objekt repräsentiert den Server.
// Auf das app-Objekt werden im Folgende Methoden aufgerufen 
const app = express()
// Mit der ejs-view-Engine werden Werte von der server.js zur index-Datei gegeben.
app.set('view engine', 'ejs')
// ...
app.use(express.static('public'))
// ...
const bodyParser = require('body-parser')
// ...
app.use(bodyParser.urlencoded({extended: true}))
// ...
const server = app.listen(process.env.PORT || 3000, () => {        console.log('Server lauscht auf Port %s', server.address().port)    })