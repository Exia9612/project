import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdTime: {
    type: Date,
    default: new Date()
  }
})

export default mongoose.model('Session', sessionSchema)