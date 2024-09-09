// Создайте класс Car с конструктором, принимающим параметры make, model и year. 
// Добавьте метод getCarInfo, который возвращает строку с информацией о машине в формате 
// "Машина: [make] [model], год выпуска: [year]". 
// Создайте несколько объектов этого класса и вызовите метод для каждого из них.

class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    getCarInfo() {
        return `Машина: ${this.make} ${this.model}, год выпуска: ${this.year}`
    }
}

let car1 = new Car('Hyundai', 'Solaris', 2016)
let car2 = new Car('Toyota', 'Prius', 2020)
let car3 = new Car('Toyota', 'Land Cruiser', 2012)

console.log(car1.getCarInfo())
console.log(car2.getCarInfo())
console.log(car3.getCarInfo())
