import mongoose from 'mongoose';
import crypto from 'crypto';

// ----- TodoSchema --------//
const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  category: {
    type: String,
    enum: ['work', 'home', 'social', 'health', 'other'],
  },
  createdAt: {
    type: Number,
    default: () => Date.now(),
  },
  done: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

// Todo model that uses the TodoSchema
const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
