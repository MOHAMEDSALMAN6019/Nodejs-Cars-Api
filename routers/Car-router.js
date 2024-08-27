import express from 'express'

import {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} from '../repositories/car-repository.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json(getAllCars())
})

router.get('/:carId', ({ params: { carId } }, res) => {
  const car = getCarById(parseInt(carId))
  res.json(car)
})

router.post('/', ({ body }, res) => {
  const newCar = createCar(body)
  res.json(newCar).status(201)
})

router.put('/:carId', ({ params: { carId }, body }, res) => {
  const updatedCar = updateCar(parseInt(carId), body)
  res.json(updatedCar)
})

router.delete('/:carId', ({ params: { carId } }, res) => {
  deleteCar(parseInt(carId))
  res.sendStatus(204)
})

export default router
