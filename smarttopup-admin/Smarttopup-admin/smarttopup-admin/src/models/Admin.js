import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  failedAttempts: { type: Number, default: 0 },
  lockedUntil: { type: Date, default: null }
});

// Pre-save hash
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const saltRounds = parseInt(process.env.BCRYPT_ROUNDS) || 12;
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

// Compare Password
adminSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;