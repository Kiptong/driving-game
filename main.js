/* eslint-disable no-unused-vars */
class Car {

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

const kip = new Car()

kip.createCar('car-images/ferrari.png')
