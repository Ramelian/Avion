import jwt from "jsonwebtoken";

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

function authMiddleware(req, res, next) {
  console.log(req.headers)
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log("Token: ", token)
  try {
    const decoded = verifyToken(token);
    if (!decoded) throw "Unverified";

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

export default authMiddleware;
