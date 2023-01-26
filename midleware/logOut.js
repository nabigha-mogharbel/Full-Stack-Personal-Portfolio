const logOut = (req, res) => {
  const username = req.cookies.username;
  res.clearCookie("auth-token");
  res.clearCookie("username");
  res.send(`Bye ${username}!`);
}


  export default logOut