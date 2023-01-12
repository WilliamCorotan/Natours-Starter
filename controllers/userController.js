const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'No route'
  })
}

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'No route'
  })
}

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'No route'
  })
}

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'No route'
  })
}

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'No route'
  })
}