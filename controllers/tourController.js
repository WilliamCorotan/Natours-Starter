const fs = require('fs')

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

exports.checkId = (req, res, next, val) =>{
  console.log(`Tour ID is: ${val}`)

  if(req.params.id * 1 >= tours.length) 
  return  res.status(404).json({
    status: 'failed',
    message: 'Invalid ID'
  })
  next()
}
//function
exports.checkBody = (req, res, next)=>{
  if(!req.body.name || !req.body.price){
    return res.status(400).json({
      status: 'failed',
      message: 'Bad Request'
    })
  }
  next()
}

exports.getAllTours = (req,res)=>{
  console.log(req.requestTime)
  res.status(200).json(
    {
    status: 'success', 
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
    tours
  }})
}

exports.getTour = (req,res)=>{
  //to parse to int
  const id = req.params.id * 1
  const tour = tours.find(el => el.id === id)

  res.status(201).json(
    {
    status: 'success', 
    data: {
    tours: tour
  }})
}

exports.createTour =  (req,res)=>{  
  const newId  = tours[tours.length - 1].id + 1
  const newTour = Object.assign({id:newId}, req.body)
  tours.push(newTour)

  // !not reflecting in data/tours-simple.json

  fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`, JSON.stringify(tours), (err)=>{{
    res.status(201).json(
      {
        status: 'added',
        data: {
          tour: newTour
        }
      }
    )
    
  }})
}

exports.updateTour = (req,res)=>{
  res.status(200).json(
    {
      status: 'added',
      data: {
        tour: `<Updated Tour>`
      }
    }
  )
}

exports.deleteTour = (req, res) =>{
  res.status(204).json(
    {
      status: 'delete',
      data: null
    }
  )
}
