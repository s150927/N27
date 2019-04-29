class Auto {
    constructor() {
        this.Raeder;
        this.Sitze;
    }
}

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'Training')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

//Eine Klasse ist ein Bauplan. Der Bauplan sieht vor, wie Objekte erstellt werden.
// Alle Objekete die von einem Bauplan erstellt werden haben die selben eigenschaften 
// aber möglicherweise unterschiedliche eigenschaftswerte.


//Klassendefinition 

//=================

class Rechteck{
    constructor(){
        this.laenge
        this.breit
    }
}

// Klassendefiniton für Schüler in einer Schule

class Schueler{
    constructor(){
        this.geschlecht
        this.klasse
        this.alter
        this.vorname
        this.nachname
    }
}

class Fussballer{
    constructor(){
        this.vorname
        this.name
        this.fuß
        this.groeße
        this.gewicht
        this.alter
        this.verein
        this.marktwert
    }

}
let fussballer = new Fussballer()
fussballer.vorname = Jo
fussballer.name = Stuerznickel
fussballer.fuß = "R"
fussballer.groeße = 1,86
fussballer.gewicht = 80
fussballer.alter = 23
fussballer.verein = Real Madrid 
fussballer.marktwert = 130 mio
//Deklaration eines neuen Objektes vom Typ Rechteck
// Deklaration = Bekantmachung
// Let rechteck 

// Instanziirung eines neuen Objekts
// Instanziirung erkennt man immer am reservierten Wort "new"
// Bei der Instanziirung wird immer Arbeitsspeicher bereitgestellt 
//...= new Rechteck()
// 1. Deklaration 2. Instanziirung 

let rechteck = new Rechteck()
let schueler = new Schueler()
// 3. Initalisirung (Kronkete Eigenschaftswerte werde zugewiesen)
rechteck.breite = 2
rechteck.laenge = 3

schueler.geschlecht = "W"
schueler.alter  = 17 

console.log("Länge : " + rechteck.lange)
console.log("Breite : " + rechteck.breite)

// Wenn localhost:3000/klasse-objekt-ejs-trainieren aufgerufen wird ...

app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', { 
        breite : rechteck.breite, 
        laenge : rechteck.laenge,
        alter : schueler.alter,
        geschlecht : schueler.geschlecht
    })
})

