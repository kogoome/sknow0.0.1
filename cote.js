const answers = [1,2,3,4,5,2,3,1,4]

const first = [1,2,3,4,5]
const second = [2,1,2,3,2,4,2,5]
const third = [3,3,1,1,2,2,4,4,5,5]

const ok = {1:0,2:0,3:0}

answers.map((a,i)=>{
  if(a === first[i%5]){ ok[1]++ }
  if(a === second[i%8]){ ok[2]++ }
  if(a === third[i%10]){ ok[3]++ }
})
console.log(ok)
console.log(...Object.entries(ok));
const answer = Object.entries(ok).sort((a, b) => b[1] - a[1]).map(v=>{
  return v[0]
})