console.log(this);

function a (){
    console.log(this);
}
a();

const video = {
    title : "a",
    play(){
        console.log(this);
    }
}
video.play();

function video2 (title){
    this.title = title;
    console.log(this);
}
const v = new video2("ads");

const video3 = {
    title : "a",
    tags : ["a","d","s"],
    showTags(){
        this.tags.forEach(function(t){
        console.log(t);
        })
    },
    showTags2(){
        this.tags.forEach(function(t){
        console.log(this.title,t);
        })
    }, 
}      
video3.showTags();
video3.showTags2();
// برای حل مشکل 
const video4 = {
    title : "a",
    tags : ["a","d","s"],
    showTags(){
        this.tags.forEach(function(t){
        console.log(t);
        })
    },
    showTags2(){
        this.tags.forEach(function(t){
        console.log(this.title,t);
        },this) //  میشه  بجای this از پراپرتی استفاده کرد
    }, 
}      
video4.showTags();
video4.showTags2();
//=======================
walk();
function walk(){
    console.log("walk");
}

let run = function (){  // میتواند اسم داشته باشد
    console.log("run");
}
let move = run;
move();
run();
//=======================
function sum (a,b){
    return a+b;
}
console.log(sum(1,2));
console.log(sum(1));
console.log(sum());
console.log(sum(1,2,3,4,5));

function sum2 (){ // میتوانیم بجای استفاده از argumants  از ...x استفاده کنیم
    //console.log(arguments);
    let total = 0;
    for(let value of arguments)
        total+= value;
    return total;
}
console.log(sum2(1,2,3,4,5));
//=======================
const number = [-1,1,2,3,4,5];
let sum3 = 0;
for(let n of number)
sum3+= n;
console.log(sum3);
// استفاده از متود reduce
let sum4 = number.reduce(function(a,b){
    return a+b;
},0)  // میتوانیم 0 را در این مورد نگذاریم
console.log(sum4);
//=======================
function interest(princical,rate,years){
    rate = rate || 3.5;
    years = years || 5;
    return (princical * rate * years) / 100;
}
console.log(interest(1000000));
console.log(interest(1000000,12,1));
//console.log(interest(1000000,8)); شدنی نیست
console.log(interest(1000000,7,undefined));
console.log(interest(1000000,undefined,8));

function interest2(princical,rate=3.5,years=5){  //  اگر به rate مقدار دیفالت دادیم  باید به years هم بدهیم
    return (princical * rate * years) / 100;
}
console.log(interest2(1000000));

function interest3(princical,rate=3.5,years){ 
    return (princical * rate * years) / 100;
}
console.log(interest3(1000000,undefined,10));
//=======================
const person = {
    Fname : "ali",
    Lname : "amiri",
    fullName(){
        return (`${person.Fname} ${person.Lname}`);
    }
};
console.log(`${person.Fname} ${person.Lname}`);
console.log(person.fullName());
// برای تعییر 
const person2 = {
    Fname : "ahmad",
    Lname : "amiri",
    get fullName(){
        return (`${person2.Fname} ${person2.Lname}`);
    }
};
//console.log(`${person2.Fname} ${person2.Lname}`);
console.log(person2.fullName);

const person3 = {
    Fname : "ahmad",
    Lname : "amiri",
    set fullName(value) {
        const parts = value.split(" ");
        this.Fname = parts[0];
        this.Lname = parts[1];
    }
}
person3.fullName = "reza ahmadi";
console.log(person3.Fname, person3.Lname);
//=======================
function sumA (...args){  // عملگر rest
    //console.log(args);
    return args.reduce((a,b)=>a + b)
}
console.log(sumA(1,2,3,4,5,6,7,17,18,19,-20,-21));

function sumB (discount,...args){  // عملگر rest که همیشه باید اخرین پارامتر باشد
    const total = args.reduce((a,b)=>a + b) 
    return total * (1-discount)
}
console.log(sumB(0.1,1,2,3,4,5,6,7,8,9,10));
//=======================
function starts (){
    const msg = "neon";
    if(true){
        const another = "hi";
    }
    console.log(another);   // در اسکوپ درست تعریف نشده
    for(let i = 0;i<5;i++){  
        console.log(i);    // در اسکوپ درست تعریف شده
    }
    console.log(i);  // در اسکوپ درست تعریف نشده
}
//console.log(msg);  // در اسکوپ درست تعریف نشده

//const msg = "neon";  // چون خازج ار اسکوپ staets هستیم تعریف msg  اشکالی ندارد ولی تعریف مجدد در گلوبال شدنی نیست
//const msg = "hi";    // ما همچنان این قابلیت را داریم که  msg  را در یک اسکوپ جدید تعریف کنیم

function startsA (){
    const msg = "neon";
    //console.log(msg);
    return msg;
}
startsA();
function startsB (){
    const msg = "hi";
    //console.log(msg);
    return msg;
}
startsB();

//const result = startsA() + startsB();  // بدون فاصله
const result =`${startsA()} ${startsB()}`;
console.log(result);
// محدوده ی گلوبال 
const color = "red";  // ثابت با اسکوپ گلوبال

function colorA (){
    console.log(color);
}
colorA();   // عبارت گلوبال در همه جا قابل دسترس است حتی در اسکوپ های دیگر

function colorB (){
    const color = "blue";
    console.log(color);  // اولویت با اسوکپی هست که در ان هستیم یا در واقع local
}
colorB();
console.log(color);  // اینچا خارج از اسکوپ و در گلوبال هستیم
// برای اثبات بهتر  local 
function startsC (){
    let age = 18;
    if(true){
        let age = 20;  // اگر بدون let بیاید به اسکوپ پدر اشاره میکند
        console.log(age);  // اولویت با اسکوپی هست که در ان هستیم
    }
    console.log(age);  // این در اسکوپ startsC قابل دسترس است و متغیر  age = 18  زودتر امده در واقع اسکوپ پدر است و  age = 20  در اسکوپ پسر است 
}
startsC();
//=======================
var y = 141;
console.log(y);

function starts1 (){
    for(let i = 0;i < 6;i++){
       console.log(i);
    }
    //console.log(i);  // چون خارج از اسکوپ بوده 
}
starts1();

function starts2 (){
    for(var i = 0;i < 6;i++){  // اسکوپ  var  به فانکشنش محدود مییشود نه اسکوپش 
       // console.log(i);
    }   
    console.log(i);  // اخرین مقدار که شش بوده در خودش ذخیره و نمایش میدهد 
}
starts2();
//=======================
var rang = "green";
let sen = 36;
console.log(window.rang); // اثبات ابنکه هر متغیری که با  var  تعریف میشود خودش را به شی گلوبال یا window  میچسباند
console.log(sen);  // ولی let و const  چنین رفتاری را ندارد
//=======================
const personA = {
    Fname : "ahmad",
    Lname : " mohammadi",
    get fullName(){
        return (`${personA.Fname} ${personA.Lname}`);
    },
    set fullName(value){
        if(typeof value !== "string")
            throw new Error("value is not string");
        
        const parts = value.split(" ");
        this.Fname = parts[0];
        this.Lname = parts[1];
    }    
};

//console.log(personA);

try {
    personA.fullName = true;
} catch (error) {
    console.log(error);
}

const personB = {
    Fname : "akbar",
    Lname : " mohammadzade",
    get fullName(){
        return (`${personB.Fname} ${personB.Lname}`);
    },
    set fullName(value){
        const parts = value.split(" ");
        if(parts.length !== 2)
            throw new Error("value is not string");
        this.Fname = parts[0];
        this.Lname = parts[1];
    }    
};
try {
    personB.fullName = "rezaalikhani";
} catch (error) {
    console.log(error);  // alert(error);
}
//=======================
const videoA = {
    title : "a",
    tags : ["a","b","c"],
    showTags3(){
        const self = this;  // چون بعضی متود ها ورودی دوم نمیگیرند
        this.tags.forEach(function(t){
            console.log(self.title , t);
            
        })
    },
}
videoA.showTags3();

function playVideo() {
    console.log(this);
}
//playVideo();  // window
playVideo.call({name : "ali"}); // المنت مورد نیاز ما رو به صورت نوشتن متوالی اضافه میکند
playVideo.apply([name = "parham",name2 = "kia"]); // همان کار call را انجام مبدهد ولی اگر ارگمان ها چندتا بودند باید انها را در یک ارایه بریزم
const fn = playVideo.bind({name : "artin"}); // ابتدا باید درون یک فانکشن بریزیم تا بتونیم اونو صدا بزنیم
fn();
// میتوانیم در همان بهره اول از arrow function استفاده کنیم
const videoB= {
    title : "a",
    tags : ["a","b","c"],
    showTags4(){
        this.tags.forEach((t)=>{
            console.log(this.title , t)
        })
    },
}
videoB.showTags4();
// چون arrow function , this را از بلاک پدر به ارث میبرد پس دیگر دو متود در هم نداریم 
//=======================
//اصول برنامه نویسی شی گرا یا object oriented programming یا oop 
// (Encapsulation)  کپسوله سازی  
// (Abstraction)    انتزاع
// (Inheritance)    وراثت
// (Polymorphism)   چند ریختی
//=======================
// (not Encapsulation):
const baseSalary = 30000;
const overTime = 12;
const rate = 22;
function calculateSalary() {
    return baseSalary + (overTime * rate);
}
console.log(calculateSalary()); 
// (Encapsulation):
let employee = {
    baseSalary : 30000,
    overTime : 12,
    rate : 22,
    get(){
        return this.baseSalary + (this.overTime * this.rate);
    },
}
console.log(employee.get());
// کد ساده و روان تر و بدون شلوغی و تعریف مفاهیم یکبار مصرف
//=======================
// (not Abstraction function)
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}
const circle = new Circle(10);
console.log(circle);
//circle.(در اینجا متود و پراپرتی های ما قابل مشاهده است)
// کمی با جزییات بیشتر 
function Circle1(radius) {
    this.radius = radius;
    this.defultLocation = {x : 0,y : 1};
    this.computeOptimumLocation = function() {
        console.log("computeOptimumLocation");
    }
}
const circle1 = new Circle1(12);
console.log(circle1);
//circle1.(در اینجا متود و پراپرتی های ما قابل مشاهده است)
// (Abstraction function)
// اگر متغیری با let تعریف شده باشد دیگر خودش را به window نمیچسباند پس میتونیم از این موضوع استفاده کنیم
// به این صورت که متغیر با let دیگر بخشی از ابجکت نیست
function Circle2(radius) {
    this.radius = radius;
    let radius2 = radius;
    let defultLocation = {x : 0,y : 1};
    let computeOptimumLocation = function() {
        console.log("computeOptimumLocation");
    }
    this.draw = function() {
        computeOptimumLocation();
    }
}
const circle2 = new Circle2(12);
console.log(circle2);
// هم در لاگ گیری و circle2. دیگر اثری از دو متود ما نیست و این کار برای پراپرتی هم قابل انجام است
// کلوژه
circle2.draw();  // چون متود  computeOptimumLocation در بلاک پدر متود draw  هست دسترسی به ان امکان پذیر است 
// در واقع متود یا پراپرتی که مخفی شده در خود فانکشن قابل دسترسی است
//=======================
// (Inheritance)
const obj = {};
console.log(obj.__proto__); // چاپ پروتوتایپ
// البته این روش بهتر است
console.log(Object.getPrototypeOf(obj));
// میتوانیم اسم کد بالا را object base بگذاریم
//=======================
// وراثت چند سطحی
const myArray = [];
//console.log(myArray.__proto__);
console.log(Object.getPrototypeOf(myArray));
// Array bace ====> object bace
// اگر یک کانسترکتور ایجاد کنیم 
function Circle3 (){
    ///////////
}
const c = new Circle3();
//console.log(c.__proto__);
console.log(Object.getPrototypeOf(c));
// Circle bace ====> object base
//=======================
// prototype description
// حالت عادی یک ابجکت
const personA1 = {name : "radman"};
//console.log(personA1.__proto__);
console.log(Object.getPrototypeOf(personA1)); // obj base
console.log(personA1.toString()); // چون خود personA1 متود toString را ندارد به والدش نگاه میکند و خروجی [object object] خواهد بود
// در حالت عادی وقتی یک ابجکت ساده را پیمایش میکنیم فقط پراپرتی هایش را میبینیم
for(let key in personA1)
    console.log(key);
// خبری از obj base نیست 
console.log(Object.keys(personA1));
// خبری از obj base نشد و به Array base  رسیدیم یعنی به متود tostring دسترسی نداریم
//به دلیل داشتن اتریبیوت برای هر پراپرتی که  به ان محلق میشوند
// برای نمایش 
let objBase = Object.getPrototypeOf(personA1);
let descriptor = Object.getOwnPropertyDescriptor(objBase,"toString");
console.log(descriptor);
// این اتریبیوت ها قابل تعییرند
Object.defineProperty(personA1,"name",{
    writable : false,  // غیر قابل باز نویسی
    enumerable: false,  // غیر قابل پیمایش کردن
});
console.log(Object.keys(personA1)); // ====> []
personA1.name = "ali";
console.log(personA1); // ====> {name : "radman"}
// پراپرتی‌ها و متدهایی که در پروتوتایپ پایه تعریف شده‌اند (مثل toString) به صورت پیش‌فرض non-enumerable هستند و در حلقه‌های for...in یا متد Object.keys نمایش داده نمی‌شوند.
// در حالت کانسترکتور فانکشن
function Circle4 (radius){
   this.radius = radius;
}
const c2 = new Circle4(12);
//console.log(c2.__proto__);
console.log(Object.getPrototypeOf(c2)); // c2 base ====> obl base
//////////////
//console.log(myArray.__proto__);
console.log(Object.getPrototypeOf(myArray));
// چون برای ایجاد ابجکت کد new Array  را داریم پس ارایه هد در واقع :
// (constractor)c2 ====> obj base
//=======================
// protype vs instance members
function CircleA1(radius){
   this.radius = radius;
   // instance members
   this.draw = function() {
        console.log("draw");
   }
}
const cA = new CircleA1(12);
const cB = new CircleA1(11);
console.log(cA);
console.log(cB);
///////////
function CircleA2(radius) {
    this.radius = radius;
}
// protype
// اضافه کردن متود draw به پروتوتایپ
CircleA2.prototype.draw = function() {
    console.log("draw");
};
const cA1 = new CircleA2(12);
const cB1 = new CircleA2(11);
 console.log(cA1);
console.log(cB1);
// فراخوانی متود draw
cA1.draw(); // خروجی: "draw"
cB1.draw(); // خروجی: "draw"
// ما متود  draw  را در c2 base از همان یکی پیروی کنند تایکی یکی بخواهیم تعریف کنیم میریزیم که تمام ابکجت های ساخته شده
//=======================
// هر ابجکت متود toString  را دارد و روال تشکیل ان را میدانیم
// میتوانی پیاده سازیش را تعییر بدهیم
function CircleA3(radius) {
    this.radius = radius;
}    
CircleA3.prototype.draw = function() {
    console.log("draw");
};
CircleA3.prototype.toString = function() {
    return "circle with radius : " + this.radius;
};
const cA2 = new CircleA3(12);
const cB2 = new CircleA3(11);
 console.log(cA2);
console.log(cB2);
// در واقع الان دوتا متود  toString  داریم که به اولیش نگاه میکند
// در instance members به protype memdeers دسترسی داریم :
function CircleA4(radius) {
    this.move = function() {
        console.log("move");  // +
    };
CircleA4.prototype.draw = function() {
    console.log("draw");
    this.move();  // +
    };
}    
const cAB = new CircleA4(19);
cAB.draw();
// و البته برعکس این موضوع
function CircleA5(radius) {
    this.move = function() {
        this.draw();  // +
        console.log("move");  
    };
CircleA5.prototype.draw = function() {
    console.log("draw");  // +
    };
}    
const cAB1 = new CircleA5(134);
cAB1.move();
//=======================
function CircleAB(radius) {
    this.radius = radius;
    this.move = function() {
        console.log("move");
    };
}
CircleAB.prototype.draw = function() {
    console.log("draw");
};
const cAB2 = new CircleAB(123);
console.log(Object.keys(cAB2)); // خروجی: ["radius", "move"]
// فقط عوامل Inctance پیمایش شدند
// برای تمامی عوامل
for(let k in cAB2){
    console.log(k);
}
// میتوانیم از Inctance بودن یا نبودنش هم یک تست بگیریم
console.log(cAB2.hasOwnProperty("radius")); // true
console.log(cAB2.hasOwnProperty("move"));   // true
console.log(cAB2.hasOwnProperty("draw"));   // false
//=======================
// پیاده سازی وراثت های شخصی 
function shape() {
    /////////
}
shape.prototype.duplicate = function() {
    console.log("duplicate");
}
const S = new shape();

function CirclE(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}
const C = new CirclE(135);
/////////////////////////
//console.log(S.__proto__);
console.log(Object.getPrototypeOf(S)); // S ====> c2(shape base) ====> obj base
/////////////////////////
//console.log(C.__proto__);
console.log(Object.getPrototypeOf(C)); // C ====> c2(CieclE base) ====> obj base
// هدف ما است که :
// C => CieclE base => shape base => obj base
CirclE.prototype = Object.create(shape.prototype);
// 
// الان ابجکت CirclE و هر ابجکتی از ان از  shape base ارث بری میکند
const C1 = new CirclE(124);
console.log(C1);
C1.duplicate();
//=======================
function shape1() {
    ///////////
}
shape1.prototype.duplicate = function() {
    console.log("duplicate");
}; 

function CirclE1(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    };
}
// تغییر پروتوتایپ قبل از ایجاد نمونه
CirclE1.prototype = Object.create(shape1.prototype);
// بازنشانی constructor
CirclE1.prototype.constructor = CirclE1;
// ایجاد نمونه‌ها
const CA = new CirclE1(15);
const CA1 = new CirclE1(24);

// تست وراثت
console.log(CA instanceof CirclE1); // true
console.log(CA instanceof shape1); // true

console.log(CA1 instanceof CirclE1); // true
console.log(CA1 instanceof shape1); // true

// فراخوانی متود duplicate از shape
CA.duplicate(); // خروجی: "duplicate"
CA1.duplicate(); // خروجی: "duplicate"
//=======================
// صدا کردن کانسترکتور والد
function shapeA (color){
    this.color = color;
}
shapeA.prototype.duplicate = function() {
    console.log("duplicate");
}; 

function CirclEA(color,radius) {
    shapeA.call(this,color);  // shapeA(color); به شی window  اشاره میکند و خروجی window.color ===>  خواهد بود
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    };
}
CirclEA.prototype = Object.create(shapeA.prototype);
CirclEA.prototype.constructor = CirclEA;
const D = new CirclEA("red",23);    
console.log(D.color);  // خروجی: "red"
console.log(D.radius); // خروجی: 23
console.log(D);
//console.log(D.radius); // خروجی: 23
// باید در کانسترکتور پسر کانستکتور پدر را صدا بزنیم تا به ابجکت ما اضافه شود
//=======================
// اگر بخواهیم یک ابجکت وراثت بسازیم
function shapeA1 (){
    this.color = color;
}
shapeA1.prototype.duplicate = function() {
    console.log("duplicate");
}; 
function CirclEA1(color,radius) {
    shapeA1.call(this,color);  
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    };
}
CirclEA1.prototype = Object.create(shapeA1.prototype);
CirclEA1.prototype.constructor = CirclEA1;
function square (color,size){
    shapeA1.call(this,color);  
    this.size = size;
}
square.prototype = Object.create(shapeA1.prototype);
square.prototype.constructor = square;
const Z = new CirclEA1("red",12);
const Y = new square("black",15);
console.log(Z);
console.log(Y);
// در اینجا از متود create  دوبار استفاده شده که میتواند ساده تر باشد
console.log(":دقیقا همان پیاده سازی است")
function shapeA2 (){
    this.color = color;
}
shapeA2.prototype.duplicate = function() {
    console.log("duplicate");
}; 
function CirclEA2(color,radius) {
    shapeA2.call(this,color);  
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    };
}
function square1 (color,size){
    shapeA2.call(this,color);  
    this.size = size;
}
// ابجکتی که بجای تعریف مجزای create , ان را در یک ابجکت تعریف و به کانسترکتورهای مورد نظر نسبت میدهیم
function e(child,parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constractor = child;
}
e(CirclEA2,shape1)
e(square1,shape1)
const ZA = new CirclEA2("black",15);
const YA = new square1("red",15);
console.log(ZA);
console.log(YA);
//=======================
// اگر بخواهیم متودمان را باز تعریف کنیم
function eA(child,parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constractor = child;
}
function shapeAB() {}
shapeAB.prototype.duplicate = function() {
    console.log("duplicate");
}; 
function CiRcLe() {}
function SqAuRe() {}
eA(CiRcLe,shapeAB)
eA(SqAuRe,shapeAB)
const R = new CiRcLe();
const W = new SqAuRe();
R.duplicate();
//console.log(R);
W.duplicate();
//console.log(R);
// برای مثال اگر بخواهیم تعریف duplicate در W  تعییر کند :
function eA1(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child; // اصلاح اشتباه تایپی
}
function shapeAB1() {}
shapeAB1.prototype.duplicate = function() {
    console.log("duplicate");
};
function CiRcLe1() {}
function SqAuRe1() {}
// وراثت از shapeAB1
eA1(CiRcLe1, shapeAB1);
eA1(SqAuRe1, shapeAB1);
// تعریف متود duplicate برای CiRcLe1 پس از وراثت
CiRcLe1.prototype.duplicate = function() {
    console.log("duplicate circle");
};
// تعریف متود duplicate برای SqAuRe1 پس از وراثت
SqAuRe1.prototype.duplicate = function() {
    console.log("duplicate square");
};

const R1 = new CiRcLe1();
const W1 = new SqAuRe1();
R1.duplicate(); 
//console.log(R1)
W1.duplicate(); 
//console.log(W1)
// اگر بخواهیم به متود پدر یا متود اضلی بدون تعییر دسترسی داشته باشیم
function eA2(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child; // اصلاح اشتباه تایپی
}

function shapeAB2() {}
shapeAB2.prototype.duplicate = function() {
    console.log("duplicate");
};
function CiRcLe2() {}
function SqAuRe2() {}
eA2(CiRcLe2, shapeAB2);
eA2(SqAuRe2, shapeAB2);
CiRcLe2.prototype.duplicate = function() {
    shapeAB2.prototype.duplicate();
    console.log("duplicate circle");

};    
SqAuRe2.prototype.duplicate = function() {
    shapeAB2.prototype.duplicate(); //*
    console.log("duplicate square"); 
};
const RA1 = new CiRcLe2();
const WA1 = new SqAuRe2();
RA1.duplicate(); 
WA1.duplicate(); 
// دوباره به همان متود اشاره شد و بعدش به متود تعییر یافته که میتواند نباشد
// اگر پراپرتی داشتیم و نیاز داشتیم در ان  this را تعییر دهیم باید بدین شکل عمل کنیم
// //* ====>  shapeAB2.prototype.duplicate.call(this);
// در کل this باید به هر نوعی بازتعزیف شود
// به این کار اورراید یا override میگویند
//=======================
//(Polymorphism)
// اگر ابجکت قابل اورراید نبود یا از همان اول میخواهیم هر ابجکت ساخته شده متودی جدا داشته باشد :
// ایجاد ابجکت ها در قالب فانکشن 
function circleZ() {}
circleZ.prototype.duplicate = function() {
    console.log("duplicate circle");
};

function Square() {}
Square.prototype.duplicate = function() {
    console.log("duplicate square");
};
// ایجاد آرایه شامل نمونه‌های مختلف
const Shape = [
    new circleZ(),
    new Square(),
];
// فراخوانی متود duplicate برای هر عنصر
for(let shape of Shape) {
    shape.duplicate();
}
const circleInstance = new circleZ();
const squareInstance = new Square();
console.log(circleInstance); // شیء circleZ
console.log(squareInstance); // شیء Square
//console.log(circleZ);
//console.log(Square);
// برای انعطاف بیشتر //
function circleZ1() {
    this.type = "circleZ1"; // اضافه کردن خاصیت type
}
circleZ1.prototype.duplicate = function() {
    console.log("duplicate circle");
};
function Square1() {
    this.type = "Square1"; // اضافه کردن خاصیت type
}
Square1.prototype.duplicate = function() {
    console.log("duplicate square");
};
// ایجاد آرایه شامل نمونه‌های مختلف
const Shape1 = [
    new circleZ1(),
    new Square1(),
];
// فراخوانی متود duplicate برای هر عنصر
for (let shape of Shape1) {
    if (shape.type === "circleZ1") { // استفاده درست از shape.type
        shape.duplicate();
    } else if (shape.type === "Square1") {
        shape.duplicate();
    }
}
// فراخوانی تابع‌ها با new
const circleInstance1 = new circleZ1();
const squareInstance1 = new Square1();
console.log(circleInstance1); // شیء circleZ1
console.log(squareInstance1); // شیء Square1
console.log(circleZ1);
console.log(Square1);
//=======================   
// classes , کلاس ها
// یک کانسترکتور ساده
function CIRcle(radius) {
    this.radius = radius;
    this.drat = function() {
        console.log("draw");
    }
}
const CC = new CIRcle(23);
console.log(CC);
// همان کانسترکنور به کمک کلاس
class CIRcle1{
    constructor(radius){
        this.radius = radius;
    }
    draw(){
        console.log('draw');
    }
}
const CC2 = new CIRcle1(32);
console.log(CC2);
// بصورت پیش فرض متود ها در کلاس به پروتوتایپ پرد میرود ولی اگر نخواهیم :
class CIRcle2{
    constructor(radius){
        this.radius = radius;
        this.move = function() {
            console.log("move");
        }
    }
    draw(){
        console.log('draw');
    }
}
const CC3 = new CIRcle2(354);
console.log(CC3);
//=======================  
// Hoisting in class 
// class Declaration
//const CCC = new CL();
//class CL{}
try {
    throw new Error("متن دلخواه خطا: کلاس CL تعریف نشده است!"); // چاپ پیام خطا به‌صورت معمولی
    const CCC = new CL(); // ساخت شیء از کلاس CL
} catch (error) {
    console.log(error);
}
class CL {} // تعریف کلاس بعد از ساخت شیء
// class Expression
//const SS = new SQuare
//const SQuare = class {}
try {
    throw new Error("متن دلخواه خطا: کلاس SS تعریف نشده است!"); // چاپ پیام خطا به‌صورت معمولی
    const SS = new SQuare
} catch (error) {
    console.log(error);
}
const SQuare = class {}
// در کل Hoisting در classes وجود ندارد
//=======================  
// کلاس در حالت عادی 
// که به درستی کار میکند
class CiRcle {
    constructor(radius){
        this.radius = radius;
    }
    draw(){} // Inctance method   
}
const A = new CiRcle(8);
console.log(A)
// static methods
// در اینجا فقط میتوانیم پراپرتی radius را ببینیم چون متود ما  static است 
// این نوع ابجکت در ابجکت های ساخته شده نمایش داده نمیشود ولی در خود کلاس قابل دسترس است
class CiRcle1 {
    constructor(radius){
        this.radius = radius;
    }
    static parse (str){
        console.log("parse");
    }
}
const A1 = new CiRcle1(8);
console.log(A1)
// برای دسترسی
CiRcle1.parse();
// کاربرد این نوع متود بیشتر برای ساختن ابجکت های خاص در برنامه است
class CiRcle2 {
    constructor(radius) {
        this.radius = radius;
    }
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new CiRcle2(radius);
    }
}
const A2 = CiRcle2.parse('{"radius":42}');
console.log(A2); 
//=======================  
// تعییر دادن this در کانسترکتور ها
// در حالت عادی
const CirClE = function(){
    this.draw = function(){
        console.log(this);
    }
}
const aC = new CirClE();
aC.draw(); // اینجا this به aC اشاره می‌کند
const aC1 = aC.draw; // اگر aC.draw() داشته باشیم خطا پیدا میکند
try {
    aC1(); // اینجا this به window اشاره می‌کند (در حالت غیر strict mode)
} catch (error) {
    console.error("خطا رخ داد:", error);
}
// aC.draw() به عنوان متود صدا زده میشود و و  aC1(); به عنوان فانکشن و به window اشاره میکند 
// ولی اگر حالت strict mode را روشن کنیم
// "strictModeTest.js"
// حالا اگر نخواهیم مود را روشن کنیم
const aC2 = aC.draw.bind(aC);
aC2();
// در کلاس ها 
// خاصیت کلاس ها این است که بصورت خودکار مود strict در انها فعال است
class CirClE1{
    draw(){
        console.log(this);
    }
}
const bC = new CirClE1();
bC.draw(); 
const bC1 = bC.draw; 
bC1(); 
const bC2 = bC.draw.bind(bC);
bC2();
//=======================  
// Abstraction کمی پیشرفته تر با symbol در کلاس ها
// در حالت عادی 
class Da{
    constructor(radius){
        this.radius = radius;
    }
}
const Daa = new Da(23);
//console.log(Daa);
// الان با Daa.radius; به پرارتی دسترسی داریمو البه نمایش داده میشود
// برای ساخت پراپرتی پرایوت
const _radius = Symbol();
class Da1{
    constructor(radius){
        this[_radius] = radius; // dash نماد پرارتی های پرایوت هست
    }
}
const Daa1 = new Da1(46);
console.log(Daa1); // ====> Symbol():46
// Symbol  هر دفعه یک چیز یکتا به ما میدهد
// برای مشاهده ان
console.log(Object.getOwnPropertyNames(Daa1)); // []
const K = Object.getOwnPropertySymbols(Daa1)[0];
console.log(Daa1[K]); //46
// سیمبل دقیق مشخص نیست و مقدار سیمبل داردکه با ورودی پراپرتی براری میکند
// در متود 
const _draw = Symbol();
class Da2{
    [_draw](){
        console.log('draw')
    }
}
const Daa2 = new Da2();
console.log(Daa2);
// در اینجا به پروتوی ان اضافه شد وگر نه میتونیم در constructor ان را تعریف کنیم در هر حال پیاده سازی Symbol همان خواهد بود
//======================= 
// مخفی کردن به کمک weakMap 
// برای پراپرتی
const _radiusA = new WeakMap();
class Q{
    constructor(radius){
        _radiusA.set(this,radius)
    } // برای دسترسی در خود کلاس
    U(){
        console.log(_radiusA.get(this));
    }
}
const QA = new Q(83);
console.log(QA); // مشکل این پیاده سازی یان است که خود weakMap در دسترس است که این مشکل را ماژول حل میکند
// برای دسترسی 
QA.U(); // 83
// برای متود
const _radiusB = new WeakMap();
const _move = new WeakMap();
class O{
    constructor(radius){
        _radiusB.set(this,radius);
        _move.set(this,function(){
            console.log("move",this);
        })
    }
    N(){
        _move.get(this)();
        console.log("draw")
    }
}
const l = new O(42);
console.log(l);
l.N(); // move undefined & move دلیلش این است که درون چند فانکشن قرار گرفتیم
//////////////////////////////
const _radiusC = new WeakMap();
const _moveA = new WeakMap();
class OA{
    constructor(radius){
        _radiusC.set(this,radius);
        _moveA.set(this,()=>{
            console.log("move",this);
        })
    }
    NA(){
        _moveA.get(this)();
        console.log("draw")
    }
}
const ll = new OA(14);
console.log(ll);
ll.NA();
//======================= 
// برای خوندن و ست کردن ممبرهای پراپرتی
// خوندن یا به عبارتی گرفتن
const _radiusD = new WeakMap();
class I{
    constructor(radius){
        _radiusD.set(this,radius)  // ذخیره مقدار radius در WeakMap
    }
    getRadius(){ // میتوانیم اولش get هم بگذاریم
        return _radiusD.get(this); // تنظیم مقدار جدید در WeakMap
    } 
}    
const X = new I(85);
console.log(X.getRadius()); // اگر get داشتتیم باید : console.log(X.getRadius); صدا میکردیم
// برای ست کردن
const _radiusE = new WeakMap();
class I1 {
    constructor(radius) {
        _radiusE.set(this, radius); // ذخیره مقدار radius در WeakMap
    }
    set setRadius(value) { // تعریف setter برای تنظیم مقدار radius
        if (value <= 0) {
            throw new Error("عدد اشتباه است"); // پرتاب خطا اگر مقدار نامعتبر باشد
        }
        _radiusE.set(this, value); // تنظیم مقدار جدید در WeakMap
    }
   // get getRadius() { // تعریف getter برای دریافت مقدار radius
   //     return _radiusE.get(this);
   // }
}
const X1 = new I1(85);
try {
    X1.setRadius = 3; // مقدار معتبر
    console.log(X1.getRadius); // خروجی: 3
}catch(e){
    console.log(e); // مدیریت خطا
}
try {
    X1.setRadius = -3; // مقدار نامعتبر
}catch(e){
    console.log(e); // خروجی: "عدد اشتباه است"
}
//======================= 
// وراثت در کلاس ها
class SHape{
    move(){
        console.log("move");
    }
}
class cIRcLe extends SHape{
    draw(){
        console.log("draw");
    }
}
const J = new cIRcLe("yellow");
console.log(J);
J.move();
J.draw();
// برای جزییات بیشتر
class SHape1{
    constructor(color) {
        this.color = color;
    }
    move(){
        console.log("move");
    }
}
class cIRcLe1 extends SHape1{
    constructor(color,radius) {
        super(color); // پراپرتی پدر باید در پسر صدا زده شود
        this.radius = radius;
    }
    draw(){
        console.log("draw");
    }
}
const JA = new cIRcLe1("yellow",33);
console.log(JA);
//======================= 
// باز تعریف متود در کلاس ها 
class SHape1A{
    constructor(color) {
        this.color = color;
    }
    move(){
        console.log("move");
    }
}
class cIRcLe1A extends SHape1A{
    constructor(color,radius) {
        super(color); // پراپرتی پدر باید در پسر صدا زده شود
        this.radius = radius;
    }
    draw(){
        console.log("draw");
    }
    move(){
        super.move(); // برای صدا کردن فانکشن پدر
        console.log("circle move"); // برای تعییر باید متود پدر را پسر بازنویسی کنیم 
    }
}
const JA1 = new cIRcLe1A("yellow",33);
console.log(JA1);
JA1.move(); 
//======================= 
// ماژول بندی common js & Es6-module
//======================= 
// کامپایلر babel 
//======================= 
// webpack
//=======================
// JS ====> Synchronous
// but
// JS ====> Asynchronous :
// call back :
function print() {
    console.log("b");
} 
console.log("a");
print();
console.log("C");
// برای تعییر پیاده سازی ====> a,c,b
function print1() {
    setTimeout(()=>{
        console.log("b"); 
    }, 1000);   
} 
console.log("a");
print1();
console.log("C");
// اگر سه توپ داشته باشیم و میخواهیم انها را از بالا پرتاپ کنیم البته به ترتیب یعنی اولی رسید بعدش دومی و همینطوری
// توابع مستقل
function ball1() {
    setTimeout(() => {
        console.log("ball1 completed");
    }, 1350);
}

function ball2() {
    setTimeout(() => {
        console.log("ball2 completed");
    }, 1750);
}

function ball3() {
    setTimeout(() => {
        console.log("ball3 completed");
    }, 2000);
}
// اجرای توابع
ball1();
ball2();
ball3();
// توابع زنجیره‌ای یعنی به ترتیب اجرا شوند
function ballA1(ballB2) {
    setTimeout(() => {
        console.log("ballA1 completed");
        ballB2(ballC3); // ارسال ballC3 به عنوان آرگومان به ballB2
    }, 2350);
}

function ballB2(ballC3) {
    setTimeout(() => {
        console.log("ballB2 completed");
        ballC3(); // فراخوانی ballC3
    }, 2750);
}

function ballC3() {
    setTimeout(() => {
        console.log("ballC3 completed");
    }, 3000);
}
ballA1(ballB2);
// callBackTest.js
// callBackTest1.js
//=======================
// پیاده سازی callBackTest1.js با promise
function ballX() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('ballX completed');
            } else {
                reject("ballX failed");
            }
        }, 10000); // تأخیر ۱۰ ثانیه
    });
}

function ballY() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (false) {
                resolve('ballY completed');
            } else {
                reject("ballY failed");
            }
        }, 7350); // تأخیر ۴ ثانیه
    });
}

function ballZ() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('ballZ completed');
            } else {
                reject("ballZ failed");
            }
        }, 7750); // تأخیر ۲ ثانیه
    });
}
// میتوانیم setTimeOut ها را حذف کنیم که اینطور به کمک متود then همه پشت سر هم اجرا میشوند
ballX()
    .then((msg) => {
        console.log(msg);
        return ballY();
    })
    .then((msg) => {
        console.log(msg);
        return ballZ();
    })
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    });
//=======================
// همین پیاده سازی promise با async and await
// برای تبدیل setTimeOut به promise
// تابع کمکی برای تبدیل setTimeout به Promise
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function ballA() {
    await delay(30000); 
    if(true){
        return ("ballA complated");
    }else{
        throw new Error("ballA failed");
    }
}
async function ballB() {
    await delay(45000); 
    if(false){
        return ("ballB complated");
    }else{
        throw new Error("ballB failed");
    }
}
async function ballC() {
    await delay(60000); 
    if(true){
        return ("ballC complated");
    }else{
        throw new Error("ballC failed");
    }
}
async function execute() {
    try{
        console.log(await ballA());
        console.log(await ballB());
        console.log(await ballC());
    }catch(e){
        console.log(e);
    }
}
execute();