class MyArrayIrerator {
  constructor (myArray) {
    this.array = myArray
    this.currentValue = 0
  }
  next () {
    return {
      value: this.array[this.currentValue++],
      done: this.currentValue > this.array.length
    }
  }
}

class MyArray {
  constructor (...args) {
    this.length = 0
    for (let i = 0; i < args.length; i++) {
      this.push(args[i])
    }
  }

  [Symbol.iterator] () {
    return new MyArrayIrerator(this)
  }
  push (...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length++] = args[i]
    }
    return this.length
  }
}


const myArray = new MyArray(1, 2, 3, 4)
const iter = myArray[Symbol.iterator]()

console.log('my iterator')
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

const arr = [1, 2, 3, 4]
const standartIter = arr[Symbol.iterator]()

console.log('standart iterator')
console.log(standartIter.next())
console.log(standartIter.next())
console.log(standartIter.next())
console.log(standartIter.next())
console.log(standartIter.next())
console.log(standartIter.next())