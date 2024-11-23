import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {
    type: String, required: true
  }
});

// Validator for password
const passwordValidator = (pw) => {
  // Referenced Material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(pw) // returns true if password matches regex, false otherwise
}
UserSchema.path("password").validate(passwordValidator);

export default mongoose.model('User', UserSchema);