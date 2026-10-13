function greetStudent() {
    console.log("Welcome to our class!")
} 
greetStudent();


function addNumbers(a,b) {
    return a+b;
}
console.log(addNumbers(5,3));


function squareNumber(number) {
    return number*number;
}
console.log(squareNumber(4));

function calculateTotal(price,quantity) {
    return price*quantity;

}
console.log(calculateTotal(10.3));


function introduceStudent(name,course="MERN Stack") {
    console.log("student:"+name);
    console.log("Cource:"+course);}

    introduceStudent("Ellaha");
    introduceStudent("Sara", "Web Development");

    function addWithReturn(a,b) { return a+b;}
    function addWithLog(a,b) {console.log(a+b);}

    let result=addWithReturn(4,6);
    console.log(result);
    let anotherResult=addWithLog(4,6);
    console.log(anotherResult);

    const multiplyNumbers=function(a,b) {return a*b;};
    console.log(multiplyNumbers(4,5));

    const isEven=(number)=> {return number %2===0;};
    console.log(isEven(4));
    console.log(isEven(7));

    let courseName ="JavaScript";
    function showCourse() {
        console.log(courseName);
    }
    showCourse();


    function showLocalVariable(){
        let studentAge=19; 
         console.log(studentAge);
    }
    showLocalVariable();


    if(true)
        { var firstVariable="I use var";
            let secondVariable="I use let";
            const thirdVariable="I use const";

            console.log(firstVariable);
            console.log(secondVariable);
            console.log(thirdVariable);
    }
    console.log(firstVariable);


    function outerFunction()
    {let message="Hello from the outer function!"; 
        function innerFunction(){
        console.log(message);
    }
    innerFunction();
} 
     outerFunction();



let globalMessage=" I am globle";
function outerLevel(){
    let outerMessage="I am in the outer function";

    function middleLevel(){
        let middleMessage="I am in the middle function";

        function innerLevel(){
            let innerMessage="I am in the inner function";
            console.log(globalMessage);
            console.log(outerMessage);
            console.log(middleMessage);
            console.log(innerMessage);
        }
        innerLevel();
    }
    middleLevel();
}
outerLevel();


let score= 90;
function showScore(){let score=50;
    console.log("Inside function:", score);
}
showScore();
console.log("Outside function:",score);


function createCounter(){let count=0;
function increaseCount(){
    count=count + 1;
    return count;
}
return increaseCount;
}


const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());


const counterA = createCounter();
const counterB = createCounter();

console.log("Counter A:",counterA());
console.log("Counter A:",counterA());

console.log("Counter B:",counterB());
console.log("Counter B:",counterB());

console.log("Counter A:",counterA());

