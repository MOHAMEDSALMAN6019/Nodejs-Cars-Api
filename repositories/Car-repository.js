const cars = [
  {
    id: 1,
    make: 'BMW',
    model: 'BMW X1',
    year: 2024,
    mileage: 16000,
    price: 179000,
  },
  {
    id: 2,
    make: 'Lexus',
    model: 'Lexus LX600',
    year: 2024,
    mileage: 17000,
    price: 524167,
  },
  {
    id: 3,
    make: 'Toyota',
    model: 'Land Cruiser 4.0L EXR',
    year: 2024,
    mileage: 10500,
    price: 238900,
  },
]

export function getAllCars() {
  return cars
}

export function getCarById(carId) {
  return cars.find((car) => car.id === carId)
}

export function createCar(createCarDto) {
  const highestCarId = Math.max(...cars.map((car) => car.id))

  const nextCarId = highestCarId + 1

  const newCar = { id: nextCarId, ...createCarDto }

  cars.push(newCar)

  return newCar
}

export function updateCar(carId, updateCarDto) {
  const carIndex = cars.findIndex((car) => car.id === carId)

  if (carIndex < 0) {
    throw new Error(`Car with id: ${carId} not found!`)
  }

  cars[carIndex] = { ...cars[carIndex], ...updateCarDto }

  return cars[carIndex]
}

export function deleteCar(carId) {
  const carIndex = cars.findIndex((car) => car.id === carId)

  if (carIndex < 0) {
    throw new Error(`Car with id: ${carId} not found!`)
  }

  cars.splice(carIndex, 1)
}
