export const authorise = (req, res, next) => {
  // not how to authorise users
  const {user} = req.query;
  if (user === "Sam") {
    console.log("authorised");
    req.user = {name: "Sam", id: 3};
    next();
  } else {
    res.status(401).send("Not authorised");
  }
};
