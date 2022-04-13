
// 타입 어노테이션
let a:string = "hello"


const hello = (b:number) => console.log("더하기 1",b+1)

hello(2)


let x:[string,number]

x=["hello",1]

x=["hello",2]

console.log(...x)


const person:[string,number] = ["kim",25]
const [first, second] = person
console.log("🚀 ~ file: test.ts ~ line 22 ~ first, second", first, second)
