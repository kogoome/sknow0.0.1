import bcrypt from 'bcrypt'
import schema from '../model/model.js'
const { User } = schema


const idToProfile = async (id) => {
  const userProfile = await User.find({ id })
  return userProfile[0]
}

const emailToProfile = async (email) => {
  const userProfile = await User.find({ email })
  return userProfile[0]
}

const createAcount = async (email, id, nickname, password2) => {
  const hashedPassword = await bcrypt.hashSync(password2, 10) // 비밀번호 해시값 변경
  const newUser = await User({ email, id, nickname, hashedPassword }) // 데이터베이스에 저장
  const saveRequest = await newUser.save() // 디비에 저장하면 저장된 데이터 리턴
  return saveRequest
}



// // 채팅상대찾기 /chat
// const chatUser = async (req, res, next) => {
//   const { weeksomId } = req.body
//   console.log(weeksomId)
//   const userProfile = await User.find({ weeksomId })
//   // eslint-disable-next-line prefer-destructuring
//   req.userProfile = userProfile[0]
//   next()
// }

// // 유져리스트
// const userList = async (req, res, next) => {
//   // 모든 유져 정보 배열검색
//   const userlist = await User.find({})
//   req.userlist = userlist
//   next()
// }

// // 팔로우 추가 취소0
// const followUpdate = async (req, res, next) => {
//   // 모든 유져 정보 배열검색
//   const userId = req.user.weeksomId
//   const { otherId } = req.body
//   const { status } = req.body // 0이면 언팔, 1이면 팔로

//   console.log(userId, otherId, status)

//   const follow = [
//     {
//       $push: { following: otherId },
//       $inc: { followingCount: 1 },
//     }, // 팔로잉 추가
//     {
//       $pull: { following: otherId },
//       $inc: { followingCount: -1 },
//     }, // 팔로잉 삭제
//     {
//       $push: { follower: userId },
//       $inc: { followerCount: 1 },
//     }, // 팔로워 추가
//     {
//       $pull: { follower: userId },
//       $inc: { followerCount: -1 },
//     }, // 팔로워 삭제
//   ]
//   const userUpdate = status === 0 ? follow[0] : follow[1]
//   const otherUpdate = status === 0 ? follow[2] : follow[3]

//   const user = await User.findOneAndUpdate({ weeksomId: userId }, userUpdate, {
//     new: true,
//   })
//   const other = await User.findOneAndUpdate(
//     { weeksomId: otherId },
//     otherUpdate,
//     { new: true }
//   )
// }

// const validPassword = async (req, res) => {
//   const { pw } = req.body
//   const userId = req.user.weeksomId
//   console.log(pw, userId)
//   const user = await User.findOne({ weeksomId: userId })
//   // 일치 1 불일치 0
//   const status = bcrypt.compareSync(pw, user.hashedPassword) ? 1 : 0
//   console.log('비번일치 1 불일치 0 :', status)
//   if (status === 1) {
//     res.sendStatus(200)
//   } else {
//     res.sendStatus(400)
//   }
// }

const userfunc = {
  idToProfile,
  emailToProfile,
  createAcount,
  // chatUser,
  // userList,
  // followUpdate,
  // validPassword,
}

export default userfunc