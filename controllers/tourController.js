const  mongoose  = require('mongoose')
const Tour = require('../models/tourModel')



//function
exports.getAllTours = async (req,res)=>{
  // try{
  //   const tours = await Tour.find()
  //   res.status(201).json(
  //     {
  //     status: 'success', 
  //     data: {
  //       Tours: tours
  //   }})
  // }
  // catch(err){
  //   res.status(400).json(
  //     {
  //       status: 'failed',
  //       data: {
  //         Error: err
  //       }
  //     }
  //   )
  // }
}

exports.getTour = async (req,res)=>{
  // try{
  //   const tour = await Tour.findById(req.params.id)

  //   res.status(201).json(
  //     {
  //     status: 'success', 
  //     data: {
  //       tour
  //   }})
  // }
  // catch(err){
  //   res.status(400).json(
  //     {
  //       status: 'failed',
  //       data: {
  //         Error: err
  //       }
  //     }
  //   )
  // }
}

exports.createTour =  async (req,res)=>{  
  // try{
  //   const newTour = await Tour.create(req.body)

  //   res.status(201).json(
  //     {
  //       status: 'added',
  //       data: {
  //         tour: newTour
  //       }
  //     }
  //   )
  // }catch(err){
  //   res.status(400).json(
  //     {
  //       status: 'failed',
  //       data: {
  //         Error: err
  //       }
  //     }
  //   )
  // }
  }

exports.updateTour = async (req,res)=>{
  // try{
  //   const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
  //   res.status(200).json(
  //     {
  //       status: 'Updated',
  //       data: {
  //         tour
  //       }
  //     }
  //   )
  // }
  // catch(err){
  //   res.status(400).json(
  //     {
  //       status: 'failed',
  //       data: {
  //         Error: err
  //       }
  //     }
  //   )
  // }
}

exports.deleteTour = async (req, res) =>{
  // try{
  //   await Tour.findByIdAndDelete(req.params.id,)
  //   res.status(204).json(
  //     {
  //       status: 'Deleted',
  //       data: {
  //         message: 'Deleted Entry'
  //       }
  //     }
  //   )
  // }
  // catch(err){
  //   res.status(400).json(
  //     {
  //       status: 'failed',
  //       data: {
  //         Error: err
  //       }
  //     }
  //   )
  // }
}
