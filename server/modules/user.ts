import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  // 用户名
  username: {
    type: String,
    default: '',
    unique: true
  },
  // 密码
  password: {
      type: String,
      default: ''
  },
  // 昵称
  nickname: {
      type: String,
      default: ''
  },
  // 头像
  headImg: {
      type: String,
      default: ''
  },
  // 邮箱
  email: {
      type: String,
      default: ''
  }
})

export default mongoose.model("User", UserSchema)