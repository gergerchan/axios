const express = require("express")
const app = express()
const port = 3000
const axios = require("axios")

app.set("view engine", "ejs")

app.get("/", (req,res) => {
    res.render("index", {judul : "Halaman Home"})    
})

app.get("/about", (req,res) => {
    res.render("about", {judul : "About"})    
})

app.get("/news", (req,res) => {
    const url = "https://berita-indo-api.vercel.app/v1"

    axios.get(`${url}/cnbc-news`)
    .then(result => {
        res.render("news", {judul : "Berita", news: result.data.data})  
    })
    .catch(err => res.status(404).send(err))
})

app.get("/corona", (req,res) => {
    const url = "https://api.kawalcorona.com/indonesia/provinsi/"

    axios.get(`${url}`)
    .then(result => {
        res.render("corona", {judul : "Data Corona", corona: result.data})  
    })
    .catch(err => res.status(404).send(err))
})

app.listen(port, () =>
    console.log("server ashiap")
)