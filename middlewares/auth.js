export const authenticateMiddleware = async (req, res, next) => {
  //auth logic here
  console.log("auth middleware");
  next();
};

export const testMiddleware = async (req, res, next) => {
  //auth logic here
  console.log("test middleware");
  next();
};
