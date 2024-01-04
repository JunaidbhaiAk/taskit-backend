import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const userId = jwt.verify(bearerToken, process.env.JWT_TOKEN);
    req.userId = userId.userId;
  } else {
    res.status(403).json({msg:'Something went wrong'});
  }
  next();
};
