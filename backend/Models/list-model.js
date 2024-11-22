
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
<<<<<<< HEAD
  taskCompleted:{
    type:Boolean,
    default:false,
  },
=======
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
  user: {  // Corrected to user
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
<<<<<<< HEAD
  },

=======
  }
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
}, { timestamps: true });

export const List = mongoose.model('List', listSchema);
