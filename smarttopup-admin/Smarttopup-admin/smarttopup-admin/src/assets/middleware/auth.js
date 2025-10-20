import jwt from 'jsonwebtoken';
import AdminUser from '../models/AdminUser.js';

export default async function adminMiddleware(req, res, next) {
  try {
    const auth = req.headers.authorization || req.cookies?.admin_jwt;
    if (!auth) return res.redirect(process.env.ADMIN_LOGIN_PATH || '/admin/login');

    const token = auth.startsWith('Bearer ') ? auth.split(' ')[1] : auth;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await AdminUser.findById(decoded.sub);
    if (!admin) return res.status(401).end();

    req.admin = admin;
    next();
  } catch (err) {
    return res.status(401).end();
  }
}