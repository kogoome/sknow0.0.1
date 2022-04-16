import mongoose from 'mongoose'

const Edge = new mongoose.Schema({
  subset: { type: Array },
  include: { type: Array },
  relation: { type: Object }
})

export default Edge