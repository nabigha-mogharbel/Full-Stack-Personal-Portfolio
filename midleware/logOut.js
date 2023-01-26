const logOut = (req, res) => {
  console.log("hello world!");
  const username = req.cookies.username;
  res.clearCookie("auth-token");
  res.clearCookie("username");
  res.send(`Bye ${username}!`);
}


  export default logOut