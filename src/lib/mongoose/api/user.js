import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import schema from '../model/model.js'
const { User } = schema

let sessions = [];

const createSession = (id) => {
  const session = {
    sknowSession: uuidv4(),
    id,
  };
  sessions.push(session);
  return Promise.resolve(session);
};

const getSession = (sknowSession) => {
  const session = sessions.find((session) =>
    session.sknowSession === sknowSession
  )
  if (!session) return Promise.resolve(null);
  return Promise.resolve(session);
};

const removeSession = (sknowSession) => {
  // console.log("5 세션삭제 함수 실행중")
  const session = sessions.find((session) => session.sknowSession === sknowSession);
  if (!session) return Promise.reject(new Error('Session not found'));
  sessions = sessions.filter((session) => session.sknowSession !== sknowSession);
  // console.log("6. 삭제후 세션 배열: ", sessions);
  return Promise.resolve(session);
};

const getUserById = async (id) => {
  const userProfile = await User.find({ id })
  return userProfile[0]
}

const getUserByEmail = async (email) => {
  const userProfile = await User.find({ email })
  return userProfile[0]
}

const createAcount = async (email, id, nickname, password2) => {
  const hashedPassword = await bcrypt.hashSync(password2, 10) // 비밀번호 해시값 변경
  const newUser = await User({ email, id, nickname, hashedPassword }) // 데이터베이스에 저장
  const saveRequest = await newUser.save() // 디비에 저장하면 저장된 데이터 리턴
  return saveRequest
}

const login = async (id, email, password) => {
  const user = id == "" ? await User.findOne({ email }) : await User.findOne({ id })
  // 일치 200 불일치 400
  const status = bcrypt.compareSync(password, user.hashedPassword) ? 200 : 400
  const name = user.id
  return { status, name }
}



// const validPassword = async (req, res) => {
//   const { pw } = req.body
//   const userId = req.user.weeksomId
//   console.log(pw, userId)
//   const user = await User.findOne({ weeksomId: userId })
//   // 일치 1 불일치 0
//   const status = bcrypt.compareSync(pw, user.hashedPassword) ? 1 : 0
//   console.log('비번일치 1 불일치 0 :', status)

// }


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


// 이렇게 모아서 내보내면 읽을때 한방에 읽어서 편함.
const userfunc = {
  createSession,
  getSession,
  removeSession,
  getUserById,
  getUserByEmail,
  createAcount,
  login,
  // chatUser,
  // userList,
  // followUpdate,
  // validPassword,
}

export default userfunc