import { writable } from "svelte/store";
import { browser } from "$app/env";


// 로컬스토리지에 다음 변수를 저장
export const userName = writable(browser && localStorage.getItem("userName") || "kogoome");
// 로컬스토리지 userName의 값을 실시간 변경 가능하게해주는 함수.
// html상에 바인딩해서 변경시키면 반영된다.
userName.subscribe(name => {
  browser && localStorage.setItem("userName", name);
})


// 배열이나 객체 입력도 가능
const storedFruits = browser && (JSON.parse(localStorage.getItem("fruits")) || ["apple", "banana", "cherry"])
export const fruits = writable(storedFruits)
fruits.subscribe((fruit) => {
  browser && (localStorage.fruits = JSON.stringify(fruit))
})

