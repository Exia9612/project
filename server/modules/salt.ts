import mongoose from "mongoose";

const saltSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // 盐
  salt: {
      type: String,
      default: ''
  },
  // 会话时间
  createTime: {
      type: Date,
      default: new Date()
  }
})

export default mongoose.model("Salt", saltSchema)