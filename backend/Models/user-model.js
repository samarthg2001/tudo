
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lists: [{  // Corrected to lists for consistency
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List',
  }]
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
