/* eslint-disable no-unused-vars */
class Car {
  constructor(direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
    return this
  }
  accelerate(speed) {
    this.speed = speed
  }
  turn(direction) {
    this.direction = direction
  }
  createCar(img) {
    const $carLine = document.createElement('li')
    $carLine.setAttribute('id', 'car')

    const $carImgDiv = document.createElement('div')
    $carImgDiv.setAttribute('id', 'carImgDiv')

    const $car = document.createElement('img')
    $car.setAttribute('src', img)

    $carImgDiv.append($car)
    $carLine.append($carImgDiv)

    const $road = document.getElementById('car-path')
    $road.append($carLine)
  }
}

const kip = new Car('north', 0, [50, 50])
kip.createCar('car-images/ferrari.png')
