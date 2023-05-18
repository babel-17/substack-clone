module.exports = function (req, res, next) {
  console.log(req.isAuthenticated())
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  };