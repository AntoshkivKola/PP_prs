/* Abstraction */

class Shape {
  constructor (color) {
    this._color = color
  }

  setColor = color => {
    this._color = color
  }

  getColor = () => {
    return this._color
  }

  applyColor = () => {
    this._color.applyColor()
  }
}

/* RefinedAbstraction */

class Triangle extends Shape {
  constructor (color) {
    super(color)
  }

  applyColor = () => {
    console.log(`Triangle filled with color`)
    const shape = new Shape(this._color)
    shape.applyColor()
  }
}

/* RefinedAbstraction */

class Pentagon extends Shape {
  constructor (color) {
    super(color)
  }

  setColor = color => {
    this.setColor(color)
  }

  getColor = color => {
    return this.getColor()
  }

  applyColor = color => {
    console.log(`Pentagon filled with color`)
    const shape = new Shape(this._color)
    shape.applyColor()
  }
}

/* Implementor */

class Color {
  applyColor = function () {
    throw new Error('applyColor method is not implemented')
  }
}

/* ConcreteImplementor */

class RedColor extends Color {
  applyColor = function () {
    console.log('red color')
  }
}

class YellowColor extends Color {
  applyColor = function () {
    console.log('yellow color')
  }
}

/* ConcreteImplementor - GreenColor */

class GreenColor extends Color {
  applyColor = function () {
    console.log('green color')
  }
}

const green = new GreenColor()
const red = new RedColor()
const yellow = new YellowColor()

const redTriangle = new Triangle(red)
const greenTriangle = new Triangle(green)

const redPentagon = new Pentagon(red)
const yellowPentagon = new Pentagon(yellow)
const greenPentagon = new Pentagon(green)

redTriangle.applyColor()
greenTriangle.applyColor()
redPentagon.applyColor()
greenPentagon.applyColor()
yellowPentagon.applyColor()
