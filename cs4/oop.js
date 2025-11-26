class circle{
    constructor(name){//ทำงานclass อัตโนมัติ
        this.name=name;    
    }
}

console.log(new circle("my circle").name);
myCircle= new circle("my circle");
console.log(myCircle.name);

let Circle1 ={
    name :"Circle1",
    pi : 3.14,
    getArea(r){
        return r**2*this.pi
    }
}

console.log(Circle1.getArea(2))