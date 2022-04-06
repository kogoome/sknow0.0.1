const mongoose = require('mongoose')

const Userdata = new mongoose.Schema({
  // 참조정보
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // 유져데이터
  // 관리자 스키마 필요
  subscribe: { type: Array },
  subscriber: { type: Array },
  doc: { type: Array }, // 작성 글
  likeDoc: { type: Array }, // 좋아요 글
  library: { type: Array }, // 라이브러리 등록
  // 카운팅 데이터
  subscribeCount: { type: Number, default: 0 },
  subscriberCount: { type: Number, default: 0 },
  docCount: { type: Number, default: 0 },
  likeCount: { type: Number, default: 0 },
  bookmarkCount: { type: Number, default: 0 },
  versionKey: false,
})

module.exports = Userdata