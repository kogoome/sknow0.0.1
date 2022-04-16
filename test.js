import controller from '../src/lib/mongoose/controller/0.index'
const {Node, User} = controller

// const conceptName = "tree"
// const conceptDescription = "뿌리, 잎, 열매, 나무질로 된 줄기 등을 가지고 있는 여러해살이 식물"

//Node.readNode(conceptName)
//Node.writeNode(conceptName, conceptDescription)


console.log(User.getUserById("lion"))