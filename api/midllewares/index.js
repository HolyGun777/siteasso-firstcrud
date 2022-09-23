// middlewares de getsion de roles
exports.isAdmin = async (req, res, next) => {
  if (!req.session.user) return res.redirect('/')
  const [user] = await db.query(`SELECT isAdmin FROM user WHERE id="${req.session.user.id}"`);
  (user.isAdmin === req.session.user.isAdmin && user.isAdmin === 1) ? next() : res.redirect('/');
}
