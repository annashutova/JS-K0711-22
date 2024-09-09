// Создайте объект person с полями name, age и методом introduce, который выводит в консоль строку вида: 
// "Привет, меня зовут [имя], мне [возраст] лет". 
// Создайте несколько экземпляров этого объекта с разными значениями и вызовите метод introduce для каждого из них.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`);
    };
}

const person1 = new Person('Алексей', 25);
const person2 = new Person('Мария', 30);
const person3 = new Person('Дмитрий', 22);

person1.introduce(); // Привет, меня зовут Алексей, мне 25 лет
person2.introduce(); // Привет, меня зовут Мария, мне 30 лет
person3.introduce(); // Привет, меня зовут Дмитрий, мне 22 года
