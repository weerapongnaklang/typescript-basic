# tsconfig.json

1. "target": "es2016" เป็นการกำหนดให้complie Typescript >>> Js es2016
2. "rootDir":"./" ตำแหน่งโฟล์เดอร์ที่เก็บกลุ่มไฟล์ ts
3. "outDir":"./dist" ตำแหน่งโฟล์เดอร์ที่เก็บกลุ่มไฟล์ Js
4. "include": ["src"] กำหนดขอบเขตของไฟล์ที่จะให้ compile 
    เช่น ไฟล์ ts ที่ถูกจัดเก็บในโฟล์เดอร์ src(ts) >> dist(js) เป็นต้น

# Watch mode
```
tsc -w , tsc --watch
```
complie realtime : ตรวจสอบและcomplie automatic


# ตัวแปรพื้นฐาน
1. boolean  let a:boolean
2. string   const b:string
3. number   const c:number

# Any and Unknown
1. Any :  คือ ts บอกไม่ได้ว่าเป็นข้อมูลชนิดใด ก็จะเป็น any    
        myVar:any = 'ruby'// string ก็ได้
    ประโยชน์ : เมื่อต้องการอยากให้ข้อมูลเปลี่ยนแปลงค่าได้ string หรือ number 
    ข้อเสีย : ไม่ควรใช้ any
2. Unknown : คล้าย any นิยามเป็นอะไรก็ได้ แต่จะมีการตรวจสอบชนิดข้อมูลก่อนเริ่มทำงาน
   let myVar:unkown = 'ruby';
   if(typeof myVar === 'ชนิดข้อมูล'){
        เริ่มทำงาน
   };

# type Assertion
    กระบวนการระบุชนิดข้อมูลด้วยตนเอง ซึ่งสามารถระบุได้ 2 รูปแบบ
    1. as
    2. <ชนิดข้อมูล>
   
# function
    1. ฟังก์ชั่นที่ไม่มีการรับและส่งค่า(void)
    2. ฟังก์ชั่นที่มีการรับค่า(Parameter)
    3. ฟังก์ชั่นที่มีส่งค่า(Return)
    4. ฟังก์ชั่นที่มีการรับและส่งค่า(Parameter & Return)
   
# default function
    เป็นการฟังก์ชั่นโดยกำหนดค่าเริ่มต้นให้กับพารามิเตอร์

# object
const person = {
    property:  value
    name: "ruby"
    age: 20
}

# Excess Propertise Check
     การตรวจสอบ Propertise ที่ส่งเข้ามาทำงานในฟังก์ชั่น

# type aliases 
    นิยามหรือสร้าชนิดข้อมูลในรูปแบบของเราได้ เรียกว่า Type Aliases
        type Employee = {
            name: string, 
            salary: number
        }
  เรียกใช้  let empl: Employee ={name:"ruby"}, salary:50000
  เข้าถึง empl.name = 'ru'
        empl.salary
        consloe.log(empl)

    (Optional properties)
        ระบุว่า property ใน type aliases สามารถกำหนดค่าหรือไม่กำหนดค่าก็ได้ โดยใช้ ?
        type Employee = {
            name: string, 
            salary ?: number
        }

# Readonly Modifier
    เป็นการระบุว่า Property ที่ทำงานใน type aliases ที่กำหนดค่าแล้วจะไม่สามารถแก้ไขค่าได้(อ่านได้อย่างเดียว) โดยใช้ readonly modifiertype Employee = {
            readonly name: string, 
            salary: number
        }

# Array 
    ข้อมูลในกลุ่มเดียวกัน ข้แอมูลชนิดเดียวกัน ที่มีตำแหน่งต่อเนื่องกัน (index) 

    คุณสมบัติ
    1. ใช้เก็บกลุ่มของข้อมูล
    2. สมาชิกจะมี ชนิดข้อมูลเหมือนกัน
   
   สร้าง array
    แบบไม่กำหนดค่าเริ่มต้น
        const x:string[] = [];
    แบบกำหนดค่าเริ่มต้น
        const x:string[] = [element, ...]

การเขาถึงสมาชิก
1. index
2. for loop ร่วมกับ length
3. forEach

# function overloading
     การสร้่างฟังก์ชั่นที่มีสื่อเหมือนกันแต่สามารถรับพารามิเตอร์จำนวนต่างกัน พร้อมคืนค่าที่แตกต่างกันได้

     1. function sayHi():string
     2. function sayHi(name:string):string
     3. function sayHi(name?:unknown):unknown

# Spread Operator
    รูปแบบการกระจายสมาชิกใน array  โดยเติมเครื่องหมาย ... ด้านหน้าตัวแปร array

# Rest Parameter
 ใช้ในการส่งค่าพารามิเตอร์(Array) เข้าไปทำงานในฟังก์ชั่นโดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ...

# Tuple
1. ชุดของตัวแปรที่อยู่ในรูปลำดับใช้เก็บค่าข้อมูลให้อยู่ในกลุ่มเดียวกัน
2. เป็นตัวแปรที่ใช้ในการเก็บข้อมูลที่มีลำดับที่ต่อเนื่อง ซึ่งข้อมูลมีค่าได้หลายค่าโดยใช้ชื่ออ้างอิงได้เพียงชื่อเดียว และใช้หมายเลขกำกับ(index) ให้กับตัวแปรเพื่อจำแนกความแตกต่างของค่าตัวแปรแต่ละตัว
   คุณสมบัติของ Tuple 
   1. ใช้เก็บกลุ่มของข้อมูล
   2. ข้อมูลที่อยู่ใน Tuple จะเรียกว่าสมาชิก หรือ element
   3. แต่ละ element จะเก็บค่าข้อมูล value และ index
   4. index 
   5. สมาชิกใน tuple มีชนิดข้อมูลต่างหรือเหมือนกันก็ได้
   6. ถูกคั่นด้วยคอมม่า
   
ความแตกต่างของ tuple และ array
==> array
    1. ขนาดมีความยืดหยุ่น
    2. สมาชิกใน array ต้องมีชนิดเดียวกัน
==> tuple
    1. มีขนาดตายตัว
    2. สมาชิกมีชนิดข้อมูลต่างกันได้ โดยต้องระบุชนิดข้อมูลกำกับ
   เช่น ใช่เก็บ http status code
