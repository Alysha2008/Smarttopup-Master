import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, un ique: true, lowercase: true, index: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: 'admin' },
  failedAttempts: { type: Number, default: 0 },
  lockUntil: { type: Date, default: null },
  twoFA: {
    enabled: { type: Boolean, default: false },
    secret: { type: String } // for TOTP if you enable
  },
  createdAt: { type: Date, default: Date.now }
});

AdminSchema.methods.isLocked = function() {
  return this.lockUntil && this.lockUntil > Date.now();
};

export default mongoose.model('AdminUser', AdminSchema);