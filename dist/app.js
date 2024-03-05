"use strict";
// console.log("Hello Application");
// function total(a: number, b: number) {
//   return a + b;
// }
// total(100, 200);
// ------- variable type , const and let ---------------
// let fname: string = "ruby";
// fname = "rulabie"; /* can chang value */
// let age: number = 30;
// let isWorking: boolean = false;
// console.log(`${fname.toUpperCase()}`);
// console.log(`${age}`);
// ------------------------------------------------------
// --------Any , Unkonw ---------------------------------
// let fname:any = 'ruby';
// fname =10
// fname=true;
// console.log(fname) /* สามารถเก็บได้หลายชนิด */
// function formatNumber(num: Number) {
//   return num.toFixed(2);
// }
// let amount = 50.12345
// formatNumber(amount)
// let money:unknown = 50.12345
// money = "50.1234"
// if(typeof money === 'number'){
//   console.log(formatNumber(money))
// }
/*  ---------- type Assertion -------------------

let username: unknown;
username = "ruby";
// 1. การใส่ as
(username as string).toUpperCase();   /* toUpperCase ใช้กับ str */
// console.log((username as string).toUpperCase());
// // 2. <type>
// (<string>username).toUpperCase();
/* ------------------------------------------*/
// let amount: number = 50;
// let result: string;
// if (amount % 2 == 0) {
//   result = "คู่";
// } else {
//   result = "คี่";
// }
// result = amount % 2 == 0 ? "คู่": ""
// console.log(`${result}`);
// let service: number = 2;
// let result: string;
// switch (service) {
//   case 1:
//     result = "สอบถามยอดเงิน";
//     break;
//   case 2:
//     result = "ฝากเงิน";
//     break;
//   case 3:
//     result = "ถอนเงิน";
//     break;
//   default:
//     result = "หมายเลขบริการไม่ถูกต้อง";
//     break;
// }
// console.log(`${result}`)
// ------ forLoop
// for (let count: number = 1; count <= 10; count++) {
//   console.log(count);
// }
// ----- Array Loop
// let users: string[] = ["ru", "la", "bie"];
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }
// ----- foreach
// users.forEach(element => {
//   console.log(element)
// });
// ======= ADVANCE =========
// 1. void function
// function sayHi(){
//   console.log('hello typescript')
// }
// sayHi();
// 2. Parameter
// function sayHi(name:string) {
//   console.log(`hello ${name}`);
// }
// sayHi('ruby');
// 3. return
// function getDiscount(): number {
//   return 500;
// }
//
// function getAddress(): string {
//   return "Phetchabun";
// }
//
// console.log(getAddress());
// 4. parameter and return
// function checkNumber(num: number): string {
//   if (num % 2 === 0) {
//     return "คู่";
//   } else {
//     return "คี่";
//   }
// }
// function total(a: number, b: number) {
//   return a + b;
// }
//
// console.log(checkNumber(3));
// console.log(total(3,4));
// =========== Arrow function ==============
// const total = (a:number,b:number)=>{
//   return  a+b
// }
// ---------- default parameter
// function showEmployee(name: string, age: number, address: string= "bkk") {
//   console.log(`ชื่อ = ${name},อายุ =  ${age}, ที่อยู่ = ${address}`);
// }
//
// showEmployee('ruby',15)
// ==================== สร้าง object =======================
// const person: { name: string; age: number } = {
//   name: "ruby",
//   age: 20,
// };
// // ฟังก์ชั่นรับค่า object
// function showDetail(data: { name: string; age: number }) {
//   console.log(`${data.name} + ${data.age}`);
// }
// showDetail(person);
// // ฟังก์ชั่น return object
// const position: { lat: number; long: number } = {
//   lat: 10,
//   long: 20,
// };
// function showPosition(): { lat: number; long: number } {
//   return {
//     lat: Math.random(),
//     long: Math.random(),
//   };
// }
// console.log(showPosition());
// Excess Propertise Check
// function showDetail(data: { name: string; age: number }) {
//   console.log(`${data.name} + ${data.age}`);
// }
//
// showDetail({name: "ruby", age:30, address:'bkk'})
// ------------ type Aliases (custom type)
// type Employess = {
//   readonly id: number;
//   name: string;
//   salary: number;
//   phone?: string;
// };
// let emp1: Employess = {
//   id: 1,
//   name: "ruby",
//   salary: 50000,
//   phone: "060-606-0000",
// };
// emp1.id = 2;
// // emp1.name = "manasawee";
// console.log(emp1);
// let emp2: Employess = { id: 2, name: "miki", salary: 60000 };
// console.log(emp2);
// // ========================== Array ========================
// const users: string[] = [];
// users.push("ru");
// users.push("la");
// users.push("bie");
/* เข้่าถึงสมาชิกแต่ละตัว */
// --- forLoop
// for(let i = 0;i< users.length;i++){
//   console.log(`${i} users[i]`)
// }
// --- forEach
// users.forEach(element=>{
//   console.log(element)
// })
// console.log(users);
/* Array type aliases */
// type Employess = {
//   name: string;
//   salary: number;
//   department: string;
// };
//
// const employees: Employess[] = [];
// employees.push({ name: "ruby", salary: 50000, department: "program" });
//
// for (let person of employees){
//   console.log(person)
// }
//  console.log(employees)
// ===== function Overloading =====
// function sayHi(name?: unknown): unknown {
//   if (!name) {
//     return `Hello TypeScript `;
//   }
//   if (typeof name == "string") {
//     return `hello ${name}`;
//   }
//   throw new Error("type of data not string");
// }
// console.log(sayHi("ruby"));
// function total(a: unknown, b: unknown):unknown {
//   if (typeof a == "number" && typeof b == "string") {
//     return a + b;
//   }
//   if (typeof a == "string" && typeof b == "string") {
//     return parseInt(a) + parseInt(b);
//   }
//   throw new Error("invalid to calculate");
// }
// console.log(total(100, 200));
// console.log(total("100", "200"));
// # Spread Operater
// const section: string[] = ["account", "financial"];
// const department: string[] = ["programmer", "marketing", "grahpic"];
// ==> ตอนแรกจะเป็น array ซ้อน array ต้องใส่ ... จะใส่ค่าเข้าไปเลยไป
// department.push(...section);
// console.log(department);
// ============ Rest Parameter ==================
// const total = (...numbumr: number[]) => {
//   return numbumr.reduce((result, value) => {
//     return result + value;
//   }, 0);
// };
// console.log(total(100, 200, 300));
// =========== destructuring ================
// const colors: string[] = ["red", "green", "blue"];
// const [red, grenn, blue] = colors;
// console.log(red);
// const person = {
//   name: "ruby",
//   age: 15,
// };
// const { name, age } = person;
// console.log(age);
// // ============== tuple =================
// const point: [number, number] = [10, 20];
// const httpStatuscode: [code:number,status:string]=[200,"OK"]
// // สร้่าง Type แบบ tuple
// type htppStatus=[code:number,status:string]
// const badstatus:htppStatus=[400,'bad']
// console.log(point)
// console.log(httpStatuscode)
// console.log(badstatus)
