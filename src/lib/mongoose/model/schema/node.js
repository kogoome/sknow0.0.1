import mongoose from 'mongoose'

const Node = new mongoose.Schema({
  // 로그인정보
  name: { type: String, required: true, unique: true },
  description: { type: String},
})

export default Node