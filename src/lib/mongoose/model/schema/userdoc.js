import mongoose from 'mongoose'

const Userdata = new mongoose.Schema({
  // 참조정보
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  node: { type: Array }, // 작성 노드
  edge: { type: Array }, // 작성 엣지
  doc: { type: Array }, // 작성 글
  library: { type: Array }, // 라이브러리 등록
  // 카운팅 데이터
  versionKey: false,
})

export default Userdata