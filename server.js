const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({path: './config.env'})

const app = require('./app')

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD) 

const DB_LOCAL = process.env.DATABASE_LOCAL

//CONNECTION TO CLOUD DATABASE
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((con)=>{
console.log("Database Connected")
}).catch((err)=>{
  console.log(err)
})

// CONNECTION TO LOCAL DATABASE
// mongoose.connect(DB_LOCAL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then((con)=>{
// console.log(con.connections)
// console.log("Database Connected")
// }).catch((err)=>{
//   console.log(err)
// })


//SERVER
const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
  console.log(`App running at port: ${PORT}`)
})
