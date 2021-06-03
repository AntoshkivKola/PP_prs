// old interface

class Shipping {
  request = function (zipStart, zipEnd, weight) {
    // ...
    return '$49.75'
  }
}

// new interface

class AdvancedShipping {
  login = function (credentials) {
    /* ... */
  }
  setStart = function (start) {
    /* ... */
  }
  setDestination = function (destination) {
    /* ... */
  }
  calculate = function (weight) {
    return '$39.50'
  }
}

// adapter interface

class ShippingAdapter extends AdvancedShipping {
  constructor (credentials) {
    super(credentials)
  }

  request = (zipStart, zipEnd, weight) => {
    this.setStart(zipStart)
    this.setDestination(zipEnd)
    return this.calculate(weight)
  }
}

// log helper
const log = (function () {
  let log = ''

  return {
    add: function (msg) {
      log += msg + '\n'
    },
    show: function () {
      alert(log)
      log = ''
    }
  }
})()

function run () {
  const shipping = new Shipping()
  const credentials = { token: '30a8-6ee1' }
  const adapter = new ShippingAdapter(credentials)

  // original shipping object and interface

  let cost = shipping.request('78701', '10010', '2 lbs')
  log.add('Old cost: ' + cost)

  // new shipping object with adapted interface

  cost = adapter.request('78701', '10010', '2 lbs')

  log.add('New cost: ' + cost)
  log.show()
}
run()
