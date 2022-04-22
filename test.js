// import controller from '../src/lib/mongoose/controller/0.index'
// const {Node, User} = controller

// // const conceptName = "tree"
// // const conceptDescription = "뿌리, 잎, 열매, 나무질로 된 줄기 등을 가지고 있는 여러해살이 식물"

// //Node.readNode(conceptName)
// //Node.writeNode(conceptName, conceptDescription)


// console.log(User.getUserById("lion"))

// class 김밥 {
//   constructor(색상) {
//     this.단무지 = 색상
//     this.밥 = "흰쌀밥"
//     this.재료 = "김, 시금치, 당근, 계란, ..."
//   }
// }

// let 보통김밥 = new 김밥("노랑")
// console.log(보통김밥);
// // 생성자로 만든 보통의 김밥

// let 참치김밥 = { 추가: "참치" }
// console.log(참치김밥);
// // 프로토타입이 설정 안되있으면 참치만 갖고있는 상태

// 참치김밥.__proto__ = 보통김밥
// // 참치김밥에 프로토타입을 부여해서 김밥다운 상태가 됨

// console.log(참치김밥.__proto__.단무지);
// // 프로토타입으로 접근해서 김밥의 속성을 가져올 수 있지만

// console.log(참치김밥.단무지);
// console.log(참치김밥.밥);
// console.log(참치김밥.재료);
// console.log(참치김밥.추가);
// // 프로토타입을 부여햇기 때문에 자체속성처럼도 기능합니다.
// // 키워드를 찾을때 현재 스코프에서 못찾으면 프로토타입에서 찾기때문입니다.

// console.log(참치김밥.constructor);
// const 빨강단무지김밥 = new 참치김밥.constructor("빨강")
// console.log(빨강단무지김밥);
// // 같은 이유로 참치김밥내부의 프로토타입의 생성자 또한 접근 가능하게 됩니다.
// const 깻잎김밥 = { 추추가: "깻잎" }
// 깻잎김밥.__proto__ = 참치김밥
// 깻잎김밥.단무지 = "빨강"
// console.log(깻잎김밥) // 디버깅하면 속성 뭐잇는지 다나옴

// import _ from 'lodash'

// const newO = _.omit(깻잎김밥, '') // 오밋으로 복사하면 디버깅 안해도 다나옴
// console.log(newO.__proto__); //대신 프로토타입 사라짐
// const newO1 = _.cloneDeep(깻잎김밥)
// console.log(newO1.__proto__); // 딥클론하면 프로토타입도 잇음
// 깻잎김밥.밥 = "까만밥"
// console.log(newO);
// console.log(newO1);

// // 마이너스인덱스 사용
// const arr = ['a', 'b', 'c', 'd', 'e']
// arr.at(-1)
// console.log(arr.at(-1));

// // 템플릿 리터럴
// const tag2 = (...args) => {
//   console.log(args)
// }
// const a = '정체가'
// const b = '뭐니?'
// tag2`너의 ${a} 도대체 ${b}`

// // 템플릿 리터럴
// let person = 'Lee';
// let age = 28;
// let tag = (strings, personExp, ageExp) => {
//   console.log(strings);
//   console.log(personExp);
//   console.log(ageExp);
// };
// tag`that ${person} is a ${age}`;

// const ramenList = [
//   {
//     brand: '농심',
//     items: ['신라면', '짜파게티', '참치마요', '둥지냉면']
//   },
//   {
//     brand: '삼양',
//     items: ['삼양라면', '불닭볶음면']
//   },
//   {
//     brand: '오뚜기',
//     itmes: []
//   }
// ];

// function fn(strings, brand, items) {
//   if (items === undefined) {
//     return brand + "의 라면은 재고가 없습니다!";
//   } else {
//     return strings[0] + brand + strings[1] + items;
//   }
// }
// console.log(fn`구매가능한 ${ramenList[0].brand}의 라면 : ${ramenList[0].items}`);
// console.log(fn`구매가능한 ${ramenList[1].brand}의 라면 : ${ramenList[1].items}`);
// console.log(fn`구매가능한 ${ramenList[2].brand}의 라면 : ${ramenList[2].items}`);


// let user1 = {
//   admin() {
//     return "관리자 계정입니다."
//   }
// }
// let user2 = {};

// console.log(user1.admin?.())
// console.log(user2.admin?.())

// delete user1?.admin
// console.log(user1.admin?.())

// console.log(0 || 5);
// console.log(0 ?? "a");
// console.log(null || 5);
// console.log(null ?? "a");
// console.log(undefined || 5);
// console.log(undefined ?? "a");
// console.log("" || 5);
// console.log("" ?? "a");

// console.log("문자열에서 여러번 나오는 문자열을 한꺼번에 변경할 수 있습니다.".replace(/문자열/g, ""));

// console.log("문자열에서 여러번 나오는 문자열을 한꺼번에 변경할 수 있습니다.".replaceAll("문자열", ""));



// let oldName = null;
// let newName = 'newPerson';

// // && 연산자를 활용한 값 대입 
// oldName = ""
// oldName &&= newName
// // false라서 값이 대입되지 않음
// console.log(oldName);

// oldName ??= newName
// // 값이 존재해서 대입되지 않음
// console.log(oldName);

// oldName ||= newName
// // false라서 대입됨
// console.log(oldName);

// class A {
//   #p;
//   constructor() {
//     this.#p = 'private'
//   }

//   getP = () => {
//     return this.#p
//   }
//   #setP = (p) => {
//     this.#p = p
//   }
// }
// const aa = new A
// console.log(aa.getP());


// const array = [1, [2, [3, 5], 3], [4, 5]];
// console.log(array.flat([], 0));

import _ from 'lodash';

// function* rangeArray(start, end, step) {
//   let i = start - step;
//   while (i <= end - step) yield i += step;
// }

// console.time('제너레이터')
// const iter = rangeArray(1, 10000, 1);
// console.log([...iter]);
// console.timeEnd('제너레이터')

// // 숫자 배열 생성은 로대쉬로 생성하는게 좋긴한데,
// // 숫자 크기를 막 늘리니까 시간 차이가 별로 안남.
// // 확실히 제너레이터 효율이 좋은듯하다.
// console.time('로데시레인지')
// console.log(_.range(1, 10001, 1));
// console.timeEnd('로데시레인지')

// const arr = [1, 2, 3]
// const iter = arr[Symbol.iterator]()
// console.log(arr)
// console.log(iter)
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() { // 생성자
//     this.current = this.from;
//     this.last = this.to;
//     return this; // 자기 자신을 반환. 자기자신엔 next()메소드가 정의되어있으니, next()메소드
//     // 에서의 this는 생성자로 생성된 객체를 가리키게 된다.
//   },

//   next() { // 아예 객체안에 next()메서드를 정의.
//     if (this.current <= this.last) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   }
// };

// for (let num of range) {
//   console.log(num)
// }

// const arr = range[Symbol.iterator]();
// console.log(arr.from);
// console.log(arr.to);
// console.log(arr.current);
// console.log(arr.last);
// console.log(arr.next())
// console.log(arr.current);
// console.log(arr.next())
// console.log(arr.current);
// console.log(arr.next())
// console.log(arr.current);
// console.log(arr.next())
// console.log(arr.current);
// console.log(arr.next())
// console.log(arr.current);
// console.log(arr.next())
// console.log(...arr)
// console.log(arr)

// const array = [1,2,3]
// console.log(array)


// 브라켓 대신 괄호를 사용하면 컴마로 연산순서를 구분하고, 마지막 값을 리턴한다.
// let a = (start, step) => (
//   start += step,
//   start += step,
//   start += step,
//   start += step, // 실행
//   start // 리턴값
// )

// console.log(a(1, 3));







