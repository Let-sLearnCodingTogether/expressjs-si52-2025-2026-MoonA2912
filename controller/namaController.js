export const showProfile = (req, res) => {
  const username = req.params.username;

  res.render('profile/nama', { username });

};