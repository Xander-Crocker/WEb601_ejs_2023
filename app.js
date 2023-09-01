const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const items = [
    {name: 'Google', url: 'google.com'},
    {name: 'SFIA', url: 'https://sfia-online.org/en'}
]

res.render('pages/links', {
    items
})

app.get('/list', (req,res) => {
    const skills = ['Web development', 'Web Design', 'SDLC']
    res.render('pages/list', {
    list: skills
    })
})

app.get('/courses', (req,res) => {
    const course = [
        {name: 'WEb601', description: 'Web development API'},
        {name: 'SDV701', description: 'Software development'}
    ]
    res.render('pages/courses', {
    courses: course
    })
})

function messages(req,res,next) {
    let message = req.locals.message = message
    next()
}

app.get('/form', messages, (req,res) => {
    res.render('pages/form')
})

app.post('/form', messages, (req,res) => {
    const message = req.body
    res.locals.message = message
})

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})