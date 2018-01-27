const express = require("express")
const axios = require("axios")

const app = express()
    
const baseURL = "https://api.github.com/"

const api = axios.create({baseURL})

app.get("/seguidores/:username", (req, res) => {
    api.get(`/users/${req.params.username}/followers`)
    .then(ret => res.send(ret.data))
    .catch(err => res.status(500).send(err.respose.data))
  })

  app.listen(3000)

  console.log("Servidor Rodando!")