class Person{
    constructor(name, email){
        this._name = name
        this._email = email
    }

    get name(){
        return this._name.toUpperCase()
    }
    set name(value){
        this._name = value
    }
}

let p1 = new Person('Jahid Hasan', 'gsvmch777@gmail.com')
p1.name = 'linuxmint'
console.log(p1.name)