 //variable declaration
 let msg : string ='Hello World';
 console.log(msg);

function message(name : string) : string{
    return "Hello, "+name;
}
console.log(message("Preeti"));


let list : Array<string> =["1","2","3"];
let list1= [1,"2", true];

//declaration of interface
interface Calc {
    add(num1 : number, num2: number) : number ;
}

//implementig interface
let Calculator : Calc = {
    add(num1, num2) {
        return num1+num2;
    }
}

console.log(Calculator.add(20,30));


//Class
class Student {

    id : number;
    name : string;
    college : string;


    constructor(id : number, name: string, college:string) {
        this.id=id;
        this.name=name;
        this.college=college;
    }

    display() : void {
        console.log("Student Id :  " + this.id + "Name : " + this.name  + " College : "+this.college);
    }

}


let value : number | string;

type color = "red" | "white" | "blue";

const mycolor: color ="blue";





