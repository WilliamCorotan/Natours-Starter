const express = require('express')
const {getAllTours, getTour, createTour, updateTour, deleteTour, checkId, checkBody} = require('../controllers/tourController')

const router = express.Router()

router.param(`id`, checkId)

//todo: Create checkBody MIDDLEWARE
//todo: check if body contains the name and price property
//todo: falsey: send 400 bad req ? add it to the post handler stack

router.route(`/`).get(getAllTours).post(checkBody,createTour) // tourController.checkBody
router.route(`/:id`).get(getTour).patch(updateTour).delete(deleteTour)

module.exports = router