export const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date();
  console.log(method, url, time);
  next(); // pass on to the next function -> required or else the request will be stuck
};
