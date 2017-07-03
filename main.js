/* eslint-disable no-unused-vars */
class Car {
  constructor($car, direction, speed, location) {
    this.car = $car
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
  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        break
      case 'south':
        this.location[0] += this.speed
        break
      case 'sast':
        this.location[1] -= this.speed
        break
      case 'sest':
        this.location[0] += this.speed
        break
    }
    this.car.style.top = this.location[0] + 'px'
    this.car.style.right = this.location[1] + 'px'
  }
  static start(car) {
    window.setInterval(function () {
      car.move()
    }, 500)
  }
}
function createCar(img) {
  const $carLine = document.createElement('li')
  $carLine.setAttribute('id', 'car')

  const $carImgDiv = document.createElement('div')
  $carImgDiv.setAttribute('id', 'carImgDiv')

  const $car = document.createElement('img')
  $car.setAttribute('src', img)

  $carImgDiv.append($car)
  $carLine.append($carImgDiv)

  return $carLine
}

const x = createCar('car-images/ferrari.png')
const $road = document.getElementById('car-path')
$road.append(x)
const kip = new Car(x, 'north', 10, [50, 50])

const startButton = document.getElementById('start')
startButton.addEventListener('click', function () {
  Car.start(kip)
})
