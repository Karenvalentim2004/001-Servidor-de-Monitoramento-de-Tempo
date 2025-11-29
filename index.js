const express = require("express")
const app = express()

app.get("/status", function(req, res){
  res.send("Serviços Operacionais")
})

app.get("/horaatual", function(req, res){
  res.send("22:22 - hora de ir embora")
})

app.listen(3000)