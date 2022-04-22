import { writable } from "svelte/store";
import { browser } from "$app/env";
import { onDestroy } from "svelte";

// 상태관리
export const state = writable(0) // state 초기값을 0으로 가짐.


// 브라우저에 데이터를 저장하는 경우
// export const userName = writable(browser && localStorage.getItem("userName") || "kogoome");
// 로컬스토리지 userName의 값을 실시간 변경 가능하게해주는 함수.
// userName.subscribe(name => {
//   browser && localStorage.setItem("userName", name);
// })

// 배열이나 객체 입력도 가능
// const storedFruits = browser && (JSON.parse(localStorage.getItem("fruits")) || ["apple", "banana", "cherry"])
// export const fruits = writable(storedFruits)
// fruits.subscribe((fruit) => {
//   browser && (localStorage.fruits = JSON.stringify(fruit))
// })

