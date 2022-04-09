import controller from './src/lib/mongoose/controller/0.index.js'
const { User } = controller

const email = "kogoome@kakao.com"
const id = "kogoome"

const request = { email, id }

const result = User.checkEigntest(request)
console.log(result[0]);



