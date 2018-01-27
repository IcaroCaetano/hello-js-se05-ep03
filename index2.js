//const axios = require("axios")

//const url = "https://api.github.com/search/repositories?q=axios"

//axios.get(url).then(ret => console.log(ret.data))


const axios = require("axios")

const baseURL = "https://api.github.com"

const api = axios.create({ baseURL })

const params = { q : "axios" }

api.get("/search/repositories", { params }).then(ret => console.log(ret.data))