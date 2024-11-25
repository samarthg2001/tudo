
import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,        
  },
  taskCompleted:{
    type:Boolean,
    default:false,
  },
  user: {  // Corrected to user
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

}, { timestamps: true });

export const List = mongoose.model('List', listSchema);
