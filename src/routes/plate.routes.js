const express = require('express')
const router = express.Router()
const plateController = require('../controllers/plate.controller')

// Create a new Plate
router.post('/plates/create', (req, res) => plateController.createPlate(req, res))

// Get all PLates
router.get('/plates', (req, res) => plateController.getAllPlates(req, res))

// Get a single Plate
router.get('/plates/:id', (req, res) => plateController.getPlateById(req, res))

// Update Plate by Id
router.put('/plates/update/:id', (req, res) => plateController.updatePlate(req, res))

// Delete Plate by Id
router.delete('/plates/delete/:id', (req, res) => plateController.deletePlate(req, res))

module.exports = router