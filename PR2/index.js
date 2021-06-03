class ThomeDifficutLib1 {
  constructor (name = 'Josh Doe', age = 0) {
    this._name = name;
    this._age = age;
  }
  get name () {
    return this._name;
  }
  set name (name) {
    this._name = name;
  }
  get age () {
    return this._age;
  }
  set age (age) {
    return (this._age = age);
  }

  getData () {
    return `Name: ${this._name};\nAge ${this._age};`;
  }
}

class ThomeDifficutLib2 {
  constructor (...nums) {
    this.nums = nums;
  }

  getSum () {
    return this.nums.reduce((item, acc) => (acc += item));
  }
}

class ThomeDifficutLibMath {
  constructor (...nums) {
    this.nums = nums;
  }
  getFact () {
    let res = 1;
    const fact = num => {
      if (num <= 1) {
        return (res *= 1);
      }
      res *= num;
      return fact(num - 1);
    };
    return fact(this.nums[0]);
  }
}

class Facade {
  constructor (options, fun = undefined) {
    this.name = options.name;
    this.age = options.age;
    this.nums = options.nums;
    this.fun = fun;
  }

  operration (fun) {
    if (this.name && this.age) {
      const l1 = new ThomeDifficutLib1(this.name, this.age);
      return l1.getData();
    }
    if (this.nums && fun) {
      switch (fun) {
        case 'getSum':
          const l2 = new ThomeDifficutLib2(...this.nums);
          return l2.getSum();
        case 'getFact':
          const l3 = new ThomeDifficutLibMath(...this.nums);
          return l3.getFact();
        default:
          return undefined;
      }
    }
  }
}

const l1 = new ThomeDifficutLib1();
console.log(l1.getData());

const l2 = new ThomeDifficutLib2(2, 4, 5);
console.log(l2.getSum());
const l3 = new ThomeDifficutLibMath(5);
console.log('fact lib ', l3.getFact());

const f1 = new Facade({ name: 'Test Testovich', age: 30 });
console.log(f1.operration());

const f2 = new Facade({ nums: [5, 3, 2] });
console.log(f2.operration('getSum'));
console.log(f2.operration('getFact'));
