const mongoose = require("mongoose");
const express = require("express");

const app = express();

var cors = require("cors");
app.use(cors());

const dbURI = `mongodb+srv://noreen:PGc5n8hJmbnNpBdC@cluster0.rsjgu.mongodb.net/edyodadb?retryWrites=true&w=majority`;

const options = {
  useUnifiedTopology:true,
  useNewUrlParser:true
}

mongoose.connect(dbURI,options)
.then(()=>console.log(`database established`))
.catch((err) => console.log(err))



const playerSchema = new mongoose.Schema({},{strict:false});
 var player = mongoose.model('player',playerSchema)



app.get("/player", async (req,res) => {
  var data = await player.find();
  res.send(data)
})


app.listen(8000, () => console.log(`server started`))