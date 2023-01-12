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
console.log(con.connections)
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



const tourSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: [true, 'name is required'],
      unique: true
    },
    rating:{
      type: Number,
      default: 4.5
    },
    price:{
      type: Number,
      required: [true, 'price is required']
    }
  })

const Tour = mongoose.model('Tour', tourSchema)

const testTour = new Tour({
  name: 'The Park Camper',
  price: 997
})

testTour.save().then(doc =>{
  console.log(doc)
}).catch(err =>{
  console.log(err)
})
//SERVER
const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
  console.log(`App running at port: ${PORT}`)
})
