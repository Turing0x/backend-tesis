import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

  full_name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }

});

export const UserModel = mongoose.model('users', UserSchema)