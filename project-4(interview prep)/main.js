// js Hoisting: using a function before declaration

// hello()

// function hello() {
//     console.log('hello world')
// }



// *********************************************************************
// js closure: function inside other function
//  to declare a local variable (state) in order
//  to has access to this variable
//  even if the outer function is closed

// function makeCounter(age, name) {
//     let count = 0
//     function incriment() {
//        return count++
//     }
//     return incriment
// }

// const myCount = makeCounter()
// myCount()
// myCount()
// console.log(myCount())



// *********************************************************************
// this & arrow: depending on how obj called, this refers to 
//different things. when you use a function that is declared 
//in some other scope, 'this' refers to other scope. in order
// to change the scope to the using scop, you can use arrow fuction

// const obj = {
//     name: 'shakib',
//     age: 24,
//     birthday() {
//        setTimeout(() => {
//            this.age++
//            console.log(this)
//        }, 0)     
//     }
// }

// obj.birthday()




// *********************************************************************
// promises:asyncronous programming. fetch and other request
// methods return a promise as well

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello')
//     }, 500);
// })

// p
// .then((res) => {console.log(res + ' world')})
// .catch((err) => console.log(err))


// *********************************************************************
// async & await: syntax sugar for promises to avoid .then
// chaining

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello')
//     }, 500);
// })

// const func = async () => {
//     const a = await p
//     console.log(`${a} world`)
// }

// func()


// *********************************************************************
// HOC: same as Closure, a function that returns a function



// *********************************************************************
// js Scope: every has access to its parents scope




// *********************************************************************
// Classes & Objects: class is a blueprint for making objects

// class Person {
//     constructor(first, last) {
//       this.name =  first,
//       this.lastName =  last
//     }
//     age(number) {
//         this.age = number
//     }
//     secondName(name) {
//         this.secondName = name
//     }
//     lastName(lastname) {
//         this.lastName = lastname
//     }
//     job(jobDescription) {
//         this.job = jobDescription
//     }
// }

// const shakib = new Person('shakib', 'aghili')
// shakib.secondName('mehran')
// shakib.age(25)
// console.log(shakib)



// *********************************************************************
// typescript:

// function start() {
//     for(var i = 0; i < 5; i++) {
//         console.log(i)
//     }
// }

// start()



// *********************************************************************